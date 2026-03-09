export interface TourLanguage {
    languageCode: string; // e.g. 'en', 'ru'
    title?: string;
    description?: string;
    departure?: string;
    destination?: string;
    [key: string]: any; // fallback
}

export interface TourTypeLanguage {
    languageCode: string;
    name: string;
}

export interface TourType {
    id: string; // uuid
    createdAt: string; // date-time
    updatedAt: string; // date-time
    languages: TourTypeLanguage[];
}

export interface Tour {
    id: string; // uuid
    departure_time?: string | null;
    age_restriction: number;
    return_time?: string | null;
    max_person?: number | null;
    is_guides: boolean;
    is_first_aid: boolean;
    price: number;
    card_image?: string | null;
    image?: string | null;
    typeId: string; // uuid
    createdAt: string; // date-time
    updatedAt: string; // date-time
    type?: TourType;
    languages?: TourLanguage[];
    additionals?: any[];
    programs?: any[];
    galleries?: any[];
}

export interface ToursPaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ToursResponse {
    data: Tour[];
    meta: ToursPaginationMeta;
}

export interface GetToursParams {
    lang: string;
    page?: number;     // min 1, default 1
    limit?: number;    // min 1, max 100, default 10
    departure?: string;
    destination?: string;
    typeId?: string;   // uuid
    minPrice?: number;
    maxPrice?: number;
}

export interface TourLocationsResponse {
    departures: string[];
    destinations: string[];
}
