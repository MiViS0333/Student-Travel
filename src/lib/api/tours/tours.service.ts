import { fetcher } from '../fetcher';
import { API_ENDPOINTS } from '../config';
import {
    GetToursParams,
    ToursResponse,
    TourLocationsResponse,
    TourType,
    Tour,
} from './tours.types';

export const toursService = {
    /**
     * Paginates and filters tours
     */
    async getTours(params: GetToursParams): Promise<ToursResponse> {
        return fetcher<ToursResponse>(API_ENDPOINTS.tours.list, {
            method: 'GET',
            params: params as any, // Cast for Record<string, string|number|boolean>
            next: { revalidate: 60 } // Next.js specific ISR option. Tours might change often enough.
        });
    },

    /**
     * Fetches unique departure and destination locations
     */
    async getLocations(lang: string): Promise<TourLocationsResponse> {
        return fetcher<TourLocationsResponse>(API_ENDPOINTS.tours.locations, {
            method: 'GET',
            params: { lang },
            next: { revalidate: 3600 } // Cache for 1 hour approx as locations do not change often
        });
    },

    /**
     * Fetches the list of tour types available
     */
    async getTourTypes(lang: string): Promise<TourType[]> {
        return fetcher<TourType[]>(API_ENDPOINTS.tours.types, {
            method: 'GET',
            params: { lang },
            next: { revalidate: 3600 }
        });
    },

    /**
     * Fetches the details of a specific tour by ID
     */
    async getTourById(id: string, lang: string): Promise<Tour> {
        return fetcher<Tour>(API_ENDPOINTS.tours.byId(id), {
            method: 'GET',
            params: { lang },
            next: { revalidate: 60 }
        });
    },
};
