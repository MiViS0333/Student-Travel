export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
    auth: {
        login: '/auth/login',
        register: '/auth/register',
    },
    languages: {
        list: '/languages/',
    },
    tours: {
        list: '/tours/',
        locations: '/tours/locations',
        types: '/tours/types',
        byId: (id: string) => `/tours/${id}`,
    },
    blogs: {
        list: '/blogs/',
        byId: (id: string) => `/blogs/${id}`,
    },
};
