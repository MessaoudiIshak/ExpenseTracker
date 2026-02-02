import React, {useContext} from 'react'
import {UserContext} from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
export default function DashboardLayout({children,activeMenu}) {
    const {user} = useContext(UserContext);
  return (
    <div className='w-full min-h-screen'>
        <Navbar activeMenu={activeMenu}/>
        {user &&(
            <div className='flex flex-col md:flex-row w-full'>
                <div className='hidden lg:block md:w-64 lg:w-64 flex-shrink-0'>
                    <SideMenu activeMenu={activeMenu} /> 
                </div>
                <div className='flex-1 w-full overflow-x-hidden px-3 sm:px-5 md:mx-0'>{children}</div>
                </div>
        

        )}
        </div>
  )
}

