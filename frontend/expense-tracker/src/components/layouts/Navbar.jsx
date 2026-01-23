import React from 'react'
import {useState} from 'react'
import {HiOutlineMenu, HiOutlineX} from 'react-icons/hi'
import SideMenu from './SideMenu';

export default function Navbar({activeMenu}) {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 shadow-sm animate-fade-in">
      <button
        className="block lg:hidden text-black transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-300 rounded-full p-1"
        onClick={() => { setOpenSideMenu(!openSideMenu); }}
        aria-label="Toggle menu"
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
      <h2 className="text-lg font-bold text-black tracking-wide">Expense Tracker</h2>
      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white animate-fade-in shadow-lg rounded-r-xl">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}
