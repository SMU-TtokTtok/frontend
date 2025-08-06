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
  private tokenKey: string;

  constructor(baseUrl: string, tokenKey: string) {
    this.baseUrl = baseUrl;
    this.tokenKey = tokenKey;
  }

  async get<T = any>(path: string): Promise<T> {
    const response = await this.request('GET', path);
    return this.handleResponse<T>(response);
  }

  async getBlob(path: string): Promise<Blob> {
    const response = await this.request('GET', path);
    return response.blob();
  }

  async post<T = any>(path: string, body: any): Promise<T> {
    const response = await this.request('POST', path, body);
    return this.handleResponse<T>(response);
  }

  async patch<T = any>(path: string, body: any): Promise<T> {
    const response = await this.request('PATCH', path, body);
    return this.handleResponse<T>(response);
  }

  async put<T = any>(path: string, body: any): Promise<T> {
    const response = await this.request('PUT', path, body);
    return this.handleResponse<T>(response);
  }

  async delete<T = any>(path: string): Promise<T> {
    const response = await this.request('DELETE', path);
    return this.handleResponse<T>(response);
  }

  private async request(method: HTTPMethod, path: string, body?: any): Promise<Response> {
    try {
      const url = `${this.baseUrl}${path}`;

      const isFormData = body instanceof FormData;

      const headers: HeadersInit = isFormData
        ? {}
        : {
            'Content-Type': 'application/json',
          };
      if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem(this.tokenKey);
        if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`;
        }
      }

      const response = await fetch(url, {
        method,
        headers,
        body: isFormData ? body : body ? JSON.stringify(body) : undefined,
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
      if (error instanceof CustomHttpError) {
        throw error;
      }
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
