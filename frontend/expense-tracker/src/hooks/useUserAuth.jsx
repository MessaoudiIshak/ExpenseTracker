import {useContext, useEffect} from 'react';
import {UserContext} from '../context/UserContext';
import {useNavigate} from 'react-router-dom';
import { API_PATHS } from '../utils/apiPaths';
import axiosInstance from '../utils/axiosInstance';
export const useUserAuth = () => {
    const {user, clearUser, updateUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) { return; }
        let isMounted = true;
        const fetchedUserInfo = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.USER_INFO);
                if (isMounted && response.data) {
                    updateUser(response.data);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        fetchedUserInfo();
        return () => {
            isMounted = false;
        };
    }, [updateUser, clearUser, navigate]);
};
