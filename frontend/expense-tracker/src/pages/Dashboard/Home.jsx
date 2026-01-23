import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_PATHS } from '../../utils/apiPaths.js';
import axiosInstance from '../../utils/axiosInstance.js';
import InfoCard from '../../components/cards/InfoCard.jsx';
import FinanceOverview from '../../components/dashboard/FinanceOverview.jsx';
import {LuHandCoins, LuWalletMinimal, } from 'react-icons/lu';
import {IoMdCard} from 'react-icons/io';
import { addThousandSeparators } from '../../utils/helper.js';
import RecentTransactions from '../../components/dashboard/RecentTransactions.jsx';
import ExpenseTransactions from '../../components/dashboard/ExpenseTransactions.jsx';
import Last30DaysExpenses from '../../components/dashboard/Last30DaysExpenses.jsx';
import RecentIncomeWithChart from '../../components/dashboard/RecentIncomeWithChart.jsx';
import RecentIncome from '../../components/dashboard/RecentIncome.jsx';
export default function Home() {
  useUserAuth();
  const navigate = useNavigate();
  const [dashbaordData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchedDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.DATA);
      if(response.data){
        setDashboardData(response.data);
      }
    }
    catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => 
    {
      fetchedDashboardData();
      return () => {};
    }, []);
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto w-full px-2 md:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] animate-fade-in">
            <div className="w-16 h-16 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-violet-500 font-semibold text-lg">Loading dashboard...</span>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <InfoCard
                label="Total Balance"
                icon={<IoMdCard />}
                color="bg-primary"
                value={addThousandSeparators(dashbaordData?.totalBalance || 0)}
              />
              <InfoCard
                label="Total Income"
                icon={<LuWalletMinimal />}
                color="bg-orange-500"
                value={addThousandSeparators(dashbaordData?.totalIncome || 0)}
              />
              <InfoCard
                label="Total Expenses"
                icon={<LuHandCoins />}
                color="bg-red-500"
                value={addThousandSeparators(dashbaordData?.totalExpense || 0)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <RecentTransactions 
                  transactions={dashbaordData?.recentTransactions}
                  onSeeMore={() => navigate('/expense')} 
                />
              </div>
              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <FinanceOverview
                  totalBalance={dashbaordData?.totalBalance || 0}
                  totalIncome={dashbaordData?.totalIncome || 0}
                  totalExpense={dashbaordData?.totalExpense || 0}
                />
              </div>
              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <ExpenseTransactions
                  transactions={dashbaordData?.last30DaysExpenses?.transactions || []}
                  onSeeMore={() => navigate('/expense')}
                />
              </div>
              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <Last30DaysExpenses
                  data={dashbaordData?.last30DaysExpenses?.transactions || []}
                />
              </div>
              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <RecentIncomeWithChart
                  data={dashbaordData?.last60DaysIncome?.transactions?.slice(0,4) || []}
                  totalIncome={dashbaordData?.last60DaysIncome?.total || 0}
                />
              </div>
              <div className="transition-transform duration-500 hover:scale-[1.02]">
                <RecentIncome
                  transactions={dashbaordData?.last60DaysIncome?.transactions || []}
                  onSeeMore={() => navigate('/income')}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
