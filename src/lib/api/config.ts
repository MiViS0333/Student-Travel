const FALLBACK_URL = 'http://localhost:3000';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || FALLBACK_URL;

/**
 * Centralized helper for constructing image URLs.
 * @param path The relative path or URL of the image.
 * @param type The type/fallback category of the image.
 */
export const getImageUrl = (path: string | null | undefined, type: 'tour' | 'blog' | 'gallery' = 'tour') => {
    if (!path) {
        switch (type) {
            case 'blog': return '/media/blogs/blog_1.png';
            case 'tour': return '/media/tour/tour-detail-2.png';
            default: return '/media/tour/tour-detail-2.png';
        }
    }
    if (path.startsWith('http')) return path;
    return `${API_BASE_URL}/storage/${path.startsWith('/') ? path.slice(1) : path}`;
};

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
    bookings: {
        create: '/bookings/',
    }
};
