import React  from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import {useContext} from 'react'
import {UserContext} from '../../context/UserContext';
import {useNavigate} from 'react-router-dom';
import CharAvatar from '../cards/CharAvatar.jsx';

export default function SideMenu({activeMenu}) {
    const {user, clearUser} = useContext(UserContext);
    const navigate = useNavigate();
    const handleClick = (route) => {
        if (route === "/logout") {
            handleLogout();
        } else {
            navigate(route);
        }
    }
    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/login');
    }

    return (
        <div className="w-full sm:w-64 lg:w-64 h-auto sm:h-[calc(100vh-61px)] bg-white sm:border-r border-t sm:border-t-0 border-gray-200/50 p-3 sm:p-5 sm:sticky top-[61px] z-20 animate-fade-in">
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3 mb-4 sm:mb-7">
                {user?.profileImageUrl ? (
                    <img
                        src={user?.profileImageUrl || ''}
                        alt="Profile Image"
                        className="w-16 sm:w-20 h-16 sm:h-20 bg-slate-400 rounded-full shadow-md"
                    />
                ) : (
                    <CharAvatar
                        fullName={user?.fullName}
                        width="w-16 sm:w-20"
                        height="h-16 sm:h-20"
                        style="text-lg sm:text-xl"
                    />
                )}
            </div>
            <h5 className="text-sm sm:text-base text-gray-950 font-semibold leading-5 sm:leading-6 text-center w-full mb-4 sm:mb-6 break-words tracking-wide px-2">
                {user?.fullName || ''}
            </h5>
            {SIDE_MENU_DATA.map((item, index) => {
                const isLogout = item.link === "/logout";
                return (
                    <button
                        key={`menu_${index}`}
                        className={`w-full flex items-center gap-3 sm:gap-4 text-xs sm:text-[15px] py-2.5 sm:py-3 px-3 sm:px-6 rounded-lg mb-2 sm:mb-3 transition-all duration-200 focus:outline-none focus:ring-2 ${isLogout ? 'focus:ring-red-300' : 'focus:ring-violet-300'} hover:scale-100 sm:hover:scale-105 hover:shadow-md group ${
                            isLogout
                                ? 'hover:bg-red-50 hover:text-red-600 text-red-500 bg-white'
                                : activeMenu === item.label
                                    ? 'text-white bg-primary shadow-lg'
                                    : 'text-gray-700 bg-white hover:bg-purple-50 hover:text-purple-700'
                        }`}
                        onClick={() => handleClick(item.link)}
                    >
                        <item.icon className={`text-lg sm:text-xl transition-colors duration-200 flex-shrink-0 ${isLogout ? 'group-hover:text-red-600 text-red-400' : 'group-hover:text-purple-600'}`} />
                        <span className="truncate">{item.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
