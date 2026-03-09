import { API_BASE_URL } from './config';

export class ApiError extends Error {
    public status: number;
    public data?: any;

    constructor(message: string, status: number, data?: any) {
        super(message);
        this.status = status;
        this.data = data;
    }
}

interface FetchOptions extends RequestInit {
    params?: Record<string, string | number | boolean | undefined>;
}

export async function fetcher<T>(
    endpoint: string,
    { params, headers, ...customOptions }: FetchOptions = {}
): Promise<T> {
    // Build query params
    const searchParams = new URLSearchParams();
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        });
    }
    const queryString = searchParams.toString();
    const url = `${API_BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;

    const defaultHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    // Here you can inject Auth Token contextually depending on SSR or CSR environment
    // e.g. for SSR from next/headers, for CSR from localStorage or cookies

    const options: RequestInit = {
        ...customOptions,
        headers: {
            ...defaultHeaders,
            ...headers,
        },
    };

    const response = await fetch(url, options);

    // If response is not JSON (e.g., 204 No Content), parse accordingly
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        data = await response.json();
    } else {
        data = await response.text();
    }

    if (!response.ok) {
        throw new ApiError(
            data?.message || data?.error || response.statusText,
            response.status,
            data
        );
    }

    return data as T;
}
