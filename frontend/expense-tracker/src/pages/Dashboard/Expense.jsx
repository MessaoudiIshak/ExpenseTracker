import React from 'react'
import  { useUserAuth } from '../../hooks/useUserAuth.jsx';
import DashboardLayout from '../../components/layouts/DashboardLayout.jsx';
import { useState, useCallback, useEffect } from 'react';
import { API_PATHS } from '../../utils/apiPaths.js';
import axiosInstance from '../../utils/axiosInstance.js';
import toast from 'react-hot-toast';
import ExpenseOverview from '../../components/expense/ExpenseOverview.jsx';
import Modal from '../../components/Modal.jsx';
import AddExpenseForm from '../../components/expense/AddExpenseForm.jsx';
import ExpenseList from '../../components/expense/ExpenseList.jsx';
import DeleteAlert from '../../components/layouts/DeleteAlert.jsx';
export default function Expense() {
  useUserAuth();
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({show: false, data: null});

  // fetchExpenseDetails is now a stable function
  const fetchExpenseDetails = useCallback(async () => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_PATHS.EXPENSES.GET_ALL);
      if (response.data) {
        setExpenseData(response.data.expenses);
      }
    } catch (error) {
      console.error('Error fetching expense details:', error);
      setExpenseData([]);
    } finally {
      setLoading(false);
    }
  }, [loading]);
      const handleAddExpense = async (expense) => {
        const {amount, category, date, icon} = expense;
        if (!category.trim()){
          toast.error('Expense category is required');
          return;
        }
        if(!amount || isNaN(amount) ||Number(amount) <=0){
          toast.error('Please enter a valid amount that is greater than zero');
          return;
      }
      if (!date){
        toast.error('Please select a valid date');
        return;
      }
      try{
        await axiosInstance.post(API_PATHS.EXPENSES.ADD, {
          amount,
          category,
          date,
          icon,
        });
        setOpenAddExpenseModal(false);
        toast.success('Expense added successfully');
        fetchExpenseDetails();
      } catch (error){
        console.error('Error adding expense:', error.response?.data?.message || error.message);
        toast.error('Failed to add expense. Please try again.');
      }
      };
    const deleteExpense = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSES.DELETE(id));
      setOpenDeleteAlert({show: false, data: null});
      toast.success('Expense deleted successfully');
      fetchExpenseDetails();
    } catch (error) {
      console.error('Error deleting expense:', error.response?.data?.message || error.message);
      toast.error('Failed to delete expense. Please try again.');
    }
  };
  const handleDownloadExpenseDetails = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSES.DOWNLOAD_EXCEL, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'expenses_data.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading expense details:', error);
      toast.error('Failed to download expense details. Please try again.');
    }
  }

  useEffect(() => {
    fetchExpenseDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount
  return (
    <DashboardLayout activeMenu="Expense">
      <div className='w-full py-3 sm:py-5 px-2 sm:px-3 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 sm:gap-6 w-full'>
          <div className='w-full'>
            <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome = {() => {setOpenAddExpenseModal(true)}}
            />
          </div>
          <div className='w-full'>
            <ExpenseList 
            transactions={expenseData}
            onDelete={(id) => setOpenDeleteAlert({show: true, data: id})}
            onDownload={handleDownloadExpenseDetails}
            />
          </div>
        
        </div>
        <Modal 
          isOpen={openAddExpenseModal}
          onClose={() => setOpenAddExpenseModal(false)}
          title="Add Expense"
        >
          <AddExpenseForm 
            onAddExpense={handleAddExpense}
          />
        </Modal>
        <Modal
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({show: false, data: null})}
          title="Delete Expense"
        >
          <DeleteAlert
          content="Are you sure you want to delete this expense? This action cannot be undone."
          onDelete={() => deleteExpense(openDeleteAlert.data)}
          />
        </Modal>
      </div>
    </DashboardLayout>
  )
}
