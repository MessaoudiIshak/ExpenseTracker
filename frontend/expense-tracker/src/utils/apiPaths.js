export const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000/api/v1";
export const API_PATHS = {
    AUTH: {
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
        USER_INFO: `${BASE_URL}/auth/user`,
    },
    INCOMES: {
        GET_ALL: `${BASE_URL}/incomes`,
        ADD: `${BASE_URL}/incomes`,
        DELETE: (id) => `${BASE_URL}/incomes/${id}`,
        DOWNLOAD_EXCEL: `${BASE_URL}/incomes/download/excel`,
    },
    EXPENSES: {
        GET_ALL: `${BASE_URL}/expenses`,
        ADD: `${BASE_URL}/expenses`,
        DELETE: (id) => `${BASE_URL}/expenses/${id}`,
        DOWNLOAD_EXCEL: `${BASE_URL}/expenses/download/excel`,
    },
    DASHBOARD: {
        DATA: `${BASE_URL}/dashboard`,
    },
    UPLOADS: {
        UPLOAD_IMAGE: `${BASE_URL}/auth/upload-image`
    },
};