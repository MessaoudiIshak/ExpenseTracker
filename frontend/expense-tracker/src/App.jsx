import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import SignUp from './pages/Auth/SignUp.jsx'
import Home from './pages/Dashboard/Home.jsx'
import Expense from './pages/Dashboard/Expense.jsx'
import UserProvider from './context/UserContextProvider.jsx'
import Income from './pages/Dashboard/Income.jsx'
import { Toaster } from 'react-hot-toast'


export default function App() {
  
  return (
    
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/income' element={<Income />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
        <Toaster
          toastOptions={{
            className: "",
            style: { fontSize: "13px" }
          }}
        />
      </UserProvider>
   
  )
};
function Root() {
  const isAuthenticated = !!localStorage.getItem('token')
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
}

function Logout() {
  localStorage.clear();
  window.location.href = '/login'; // Force reload to clear context
  return null;
}
