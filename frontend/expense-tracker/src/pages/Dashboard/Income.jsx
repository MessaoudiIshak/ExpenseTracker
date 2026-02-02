import React, { useEffect, useCallback } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useState } from 'react';
import { API_PATHS } from '../../utils/apiPaths.js';
import axiosInstance from '../../utils/axiosInstance.js';
import IncomeOverview from '../../components/income/IncomeOverview';
import Modal from '../../components/Modal.jsx';
import AddIncomeForm from '../../components/income/AddIncomeForm.jsx';
import { toast } from 'react-hot-toast';
import IncomeList from '../../components/income/IncomeList.jsx';

import DeleteAlert from '../../components/layouts/DeleteAlert.jsx';
import { useUserAuth } from '../../hooks/useUserAuth.jsx';


export default function Income() {
  useUserAuth();
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({show: false, data: null});

  // fetchIncomeDetails is now a stable function
  const fetchIncomeDetails = useCallback(async () => {
    if (loading) return;
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_PATHS.INCOMES.GET_ALL);
      if (response.data) {
        setIncomeData(response.data.incomes);
      }
    } catch (error) {
      console.error('Error fetching income details:', error);
      setIncomeData([]);
    } finally {
      setLoading(false);
    }
  }, [loading]);
  const handleAddIncome = async (income) => {
    const {amount, source, date, icon} = income;
    if (!source.trim()){
      toast.error('Income source is required');
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
    await axiosInstance.post(API_PATHS.INCOMES.ADD, {
      amount,
      source,
      date,
      icon,
    });
    setOpenAddIncomeModal(false);
    toast.success('Income added successfully');
    fetchIncomeDetails();
  } catch (error){
    console.error('Error adding income:', error.response?.data?.message || error.message);
    toast.error('Failed to add income. Please try again.');
  }
  };
  const deleteIncome = async (id) => {
    try {
      await axiosInstance.delete(API_PATHS.INCOMES.DELETE(id));
      setOpenDeleteAlert({show: false, data: null});
      toast.success('Income deleted successfully');
      fetchIncomeDetails();
    } catch (error) {
      console.error('Error deleting income:', error.response?.data?.message || error.message);
      toast.error('Failed to delete income. Please try again.');
    }
  };
  const handleDownloadIncomeDetails = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.INCOMES.DOWNLOAD_EXCEL, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'income_data.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading income details:', error);
      toast.error('Failed to download income details. Please try again.');
    }

  }
  useEffect(() => {
    fetchIncomeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  return (
    <DashboardLayout activeMenu="Income">
      <div className='w-full py-3 sm:py-5 px-2 sm:px-3 md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 sm:gap-6 w-full'>
          <div className='w-full'>
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
          <div className='w-full'>
            <IncomeList
              transactions={incomeData}
              onDelete={(id)=>setOpenDeleteAlert({show : true, data:id})}
              onDownload={handleDownloadIncomeDetails}
            />
          </div>
        </div>
        <Modal isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title= "Add Income">
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>
        <Modal isOpen={openDeleteAlert.show} onClose={()=>setOpenDeleteAlert({show: false, data: null})}
          title ="Delete Income">
          <DeleteAlert content ="Are you sure you want to delete this income?" onDelete={()=>deleteIncome(openDeleteAlert.data)} />
        </Modal>
      </div>
    </DashboardLayout>
  );
}