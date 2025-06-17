import ApiClient from './apiClient';

export const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const mainClient = new ApiClient(BASE_URL);
