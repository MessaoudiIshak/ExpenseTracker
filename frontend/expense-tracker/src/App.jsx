import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Auth/Login.jsx'
import SignUp from './pages/Auth/SignUp.jsx'
import Home from './pages/Dashboard/Home.jsx'
import Expense from './pages/Dashboard/Expense.jsx'
export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};
function Root() {
  const isAuthenticated = !!localStorage.getItem('token')
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
}
