import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  token: string;
  expirationDate: string;
  userName: string;
  password: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // URL do operacji na użytkownikach
  private registerUrl = 'https://localhost:7106/api/Users/register'; // URL do rejestracji
  private changePasswordUrl =
    'https://localhost:7106/api/Users/change-password'; // URL do zmiany hasła
  private deleteUserUrl = 'https://localhost:7106/api/Users/delete'; // URL do usuwania użytkownika
  private getUsersUrl = 'http://localhost:5139/api/Users/GetAllUsers'; // URL do pobierania wszystkich użytkowników

  constructor(private http: HttpClient) {}

  // Rejestracja użytkownika
  registerUser(userData: {
    userName: string;
    password: string;
    email: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: '*/*',
    });
    return this.http.post<any>(this.registerUrl, userData, { headers });
  }

  // Zmiana hasła
  changePassword(userData: {
    userName: string;
    password: string;
    email: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: '*/*',
    });
    return this.http.put(this.changePasswordUrl, userData, {
      headers,
      responseType: 'text',
    });
  }

  // Usunięcie użytkownika
  deleteUser(userName: string): Observable<any> {
    const url = `${this.deleteUserUrl}/${userName}`; // Konstruowanie URL z nazwą użytkownika
    const headers = new HttpHeaders({
      Accept: '*/*',
    });
    return this.http.delete<any>(url, { headers });
  }

  // Pobranie wszystkich użytkowników
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }
}
