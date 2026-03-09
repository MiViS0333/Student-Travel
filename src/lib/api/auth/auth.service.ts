import { fetcher } from '../fetcher';
import { API_ENDPOINTS } from '../config';
import { RegisterRequest, LoginRequest, AuthResponse, User } from './auth.types';

export const authService = {
    /**
     * Registers a new user
     */
    async register(data: RegisterRequest): Promise<User> {
        return fetcher<User>(API_ENDPOINTS.auth.register, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },

    /**
     * Logs a user in and receives a token
     */
    async login(data: LoginRequest): Promise<AuthResponse> {
        return fetcher<AuthResponse>(API_ENDPOINTS.auth.login, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
};
