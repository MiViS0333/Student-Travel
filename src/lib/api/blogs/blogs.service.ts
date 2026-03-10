import { fetcher } from '../fetcher';
import { API_ENDPOINTS } from '../config';
import { GetBlogsParams, BlogsResponse, Blog } from './blogs.types';

export const blogsService = {
    async getBlogs(params: GetBlogsParams): Promise<BlogsResponse> {
        return fetcher<BlogsResponse>(API_ENDPOINTS.blogs.list, {
            method: 'GET',
            params: params as any,
            next: { revalidate: 60 }
        });
    },

    async getBlogById(id: string, lang: string): Promise<Blog> {
        return fetcher<Blog>(API_ENDPOINTS.blogs.byId(id), {
            method: 'GET',
            params: { lang },
            next: { revalidate: 60 }
        });
    },
};
