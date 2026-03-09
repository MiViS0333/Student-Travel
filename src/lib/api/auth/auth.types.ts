export interface User {
    id: string; // uuid
    email: string; // email format
    username: string;
    role: 'USER' | 'ADMIN';
}

export interface RegisterRequest {
    email: string;
    username: string;
    password?: string;
}

export interface LoginRequest {
    email: string;
    password?: string;
}

export interface AuthResponse {
    token: string;
}
