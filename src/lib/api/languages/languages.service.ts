import { fetcher } from '../fetcher';
import { API_ENDPOINTS } from '../config';
import { Language } from './languages.types';

export const languagesService = {
    /**
     * Retrieves a list of all supported languages
     */
    async getLanguages(): Promise<Language[]> {
        return fetcher<Language[]>(API_ENDPOINTS.languages.list, {
            method: 'GET',
            next: { revalidate: 3600 } // Cache languages as they rarely change
        });
    },
};
