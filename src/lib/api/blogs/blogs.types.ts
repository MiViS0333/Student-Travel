import { Tour } from '../tours/tours.types';

export interface BlogLanguage {
    id: string;
    languageCode: string;
    title: string;
    excerpt: string;
    content?: string;
    blogId: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Blog {
    id: string;
    card_image?: string;
    authorName?: string;
    authorImg?: string;
    createdAt?: string;
    updatedAt?: string;
    languages?: BlogLanguage[];
    tourId?: string;
    tour?: Tour;
}

export interface GetBlogsParams {
    lang?: string;
    limit?: number;
    page?: number;
}

export interface BlogsResponse {
    data: Blog[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}
