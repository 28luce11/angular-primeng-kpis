import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * API Service for handling HTTP requests
 * Singleton service provided at root level
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api';

  /**
   * Generic GET request
   */
  get<T>(endpoint: string) {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  /**
   * Generic POST request
   */
  post<T, P = unknown>(endpoint: string, payload: P) {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, payload);
  }

  /**
   * Generic PUT request
   */
  put<T, P = unknown>(endpoint: string, payload: P) {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, payload);
  }

  /**
   * Generic DELETE request
   */
  delete<T>(endpoint: string) {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`);
  }
}
