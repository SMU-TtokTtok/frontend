/* eslint-disable @typescript-eslint/no-explicit-any */

type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

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

  async delete<T = any>(path: string): Promise<T> {
    const response = await this.request<T>('DELETE', path);
    return this.handleResponse<T>(response);
  }

  private async request<T>(method: HTTPMethod, path: string, body?: any): Promise<Response> {
    try {
      const url = `${this.baseUrl}${path}`;
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      throw new Error(`API 요청 실패: ${error}`);
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    return (await response.json()) as T;
  }
}
