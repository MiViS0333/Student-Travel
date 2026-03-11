import { fetcher } from '../fetcher';
import { API_ENDPOINTS } from '../config';
import { CreateBookingPayload, BookingResponse } from './bookings.types';

export const bookingsService = {
    /**
     * Create a new booking
     */
    async createBooking(payload: CreateBookingPayload): Promise<BookingResponse> {
        return fetcher<BookingResponse>(API_ENDPOINTS.bookings.create, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    },
};
