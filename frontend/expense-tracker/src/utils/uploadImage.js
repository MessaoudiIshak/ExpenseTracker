import {API_PATHS} from './apiPaths.js';
import axiosInstance from './axiosInstance.js';


const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('profileImage', imageFile);
    try {
        const response = await axiosInstance.post(API_PATHS.UPLOADS.UPLOAD_IMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Image upload failed:', error);
        throw error;
    }
};
export default uploadImage;