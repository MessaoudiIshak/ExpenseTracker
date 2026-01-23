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
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20 animate-fade-in">
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                {user?.profileImageUrl ? (
                    <img
                        src={user?.profileImageUrl || ''}
                        alt="Profile Image"
                        className="w-20 h-20 bg-slate-400 rounded-full shadow-md"
                    />
                ) : (
                    <CharAvatar
                        fullName={user?.fullName}
                        width="w-20"
                        height="h-20"
                        style="text-xl"
                    />
                )}
            </div>
            <h5 className="text-gray-950 font-semibold leading-6 text-center w-full mb-6 break-words tracking-wide">
                {user?.fullName || ''}
            </h5>
            {SIDE_MENU_DATA.map((item, index) => {
                const isLogout = item.link === "/logout";
                return (
                    <button
                        key={`menu_${index}`}
                        className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition-all duration-200 focus:outline-none focus:ring-2 ${isLogout ? 'focus:ring-red-300' : 'focus:ring-violet-300'} hover:scale-105 hover:shadow-md group ${
                            isLogout
                                ? 'hover:bg-red-50 hover:text-red-600 text-red-500 bg-white'
                                : activeMenu === item.label
                                    ? 'text-white bg-primary shadow-lg'
                                    : 'text-gray-700 bg-white hover:bg-purple-50 hover:text-purple-700'
                        }`}
                        onClick={() => handleClick(item.link)}
                    >
                        <item.icon className={`text-xl transition-colors duration-200 ${isLogout ? 'group-hover:text-red-600 text-red-400' : 'group-hover:text-purple-600'}`} />
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
}
