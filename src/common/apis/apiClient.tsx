/* eslint-disable @typescript-eslint/no-explicit-any */

import { HTTP_STATUS } from '../constants/httpStatus';

type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

export class CustomHttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export default class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T = any>(path: string): Promise<T> {
    const response = await this.request<T>('GET', path);
    return this.handleResponse<T>(response);
  }

  async post<T = any>(path: string, body: any): Promise<T> {
    const response = await this.request<T>('POST', path, body);
    return this.handleResponse<T>(response);
  }

  async patch<T = any>(path: string, body: any): Promise<T> {
    const response = await this.request<T>('PATCH', path, body);
    return this.handleResponse<T>(response);
  }

  async put<T = any>(path: string, body: any): Promise<T> {
    const response = await this.request<T>('PUT', path, body);
    return this.handleResponse<T>(response);
  }

  async delete<T = any>(path: string): Promise<T> {
    const response = await this.request<T>('DELETE', path);
    return this.handleResponse<T>(response);
  }

  private async request<T>(method: HTTPMethod, path: string, body?: any): Promise<Response> {
    try {
      const url = `${this.baseUrl}${path}`;

      const isFormData = body instanceof FormData;

      const headers: HeadersInit = isFormData
        ? {
            'Content-Type': 'multipart/form-data',
          }
        : {
            'Content-Type': 'application/json',
          };

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new CustomHttpError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
        );
      }

      return response;
    } catch (error) {
      throw new CustomHttpError(`API 요청 실패: ${error}`, (error as CustomHttpError).status);
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (response.status === HTTP_STATUS.NO_CONTENT) {
      return {} as T;
    }

    return (await response.json()) as T;
  }
}
