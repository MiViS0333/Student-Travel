export interface CreateBookingPayload {
    tourId?: string;
    name: string;
    lastName?: string;
    email?: string;
    phone?: string;
    destination?: string;
    departure_date: string;
    number_of_people: number;
    comments?: string;
}

export interface BookingResponse {
    id: string;
    tourId?: string | null;
    name: string;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    destination?: string | null;
    departure_date: string;
    number_of_people: number;
    comments?: string | null;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    createdAt: string;
    updatedAt: string;
    tour?: any | null; // Can type thoroughly if needed, any for now
}
