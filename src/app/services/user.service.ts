import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7106/api/Users/register';  // URL do rejestracji
  private changePasswordUrl = 'https://localhost:7106/api/Users/change-password';  // URL do zmiany hasła
  private deleteUserUrl = 'https://localhost:7106/api/Users/delete';  // URL do usuwania użytkownika

  constructor(private http: HttpClient) {}

  // Metoda rejestracji użytkownika
  registerUser(userData: { userName: string; password: string; email: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    });

    return this.http.post<any>(this.apiUrl, userData, { headers });
  }

  // Metoda zmiany hasła
  changePassword(userData: { userName: string; password: string; email: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*'
    });

    return this.http.put(this.changePasswordUrl, userData, { headers, responseType: 'text' });
  }

  // Metoda usuwania użytkownika
  deleteUser(userName: string): Observable<any> {
    const url = `${this.deleteUserUrl}/${userName}`;  // Skonstruowanie URL z nazwą użytkownika
    const headers = new HttpHeaders({
      'accept': '*/*'
    });

    // Wysyłanie żądania DELETE
    return this.http.delete<any>(url, { headers });
  }
}
