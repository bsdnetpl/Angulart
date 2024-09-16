import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  token: string | null = null;
  errorMessage: string | null = null;
  decodedToken: any = null;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  login() {
    const formData = this.loginForm.value;

    this.http
      .post<any>('https://localhost:7106/api/Users/login', {
        email: formData.email,
        password: formData.password,
      })
      .subscribe(
        (response) => {
          this.token = response.token;
          console.log('Zalogowano. Token:', this.token);

          if (this.token) {
            try {
              const decoded: any = jwtDecode(this.token);
              this.decodedToken = decoded;
              console.log('Zdekodowany token:', decoded);

              // Pobieranie wartości exp
              if (decoded.exp) {
                console.log(
                  'Czas wygaśnięcia tokenu:',
                  new Date(decoded.exp * 1000)
                );
              } else {
                console.log('Brak czasu wygaśnięcia w tokenie.');
              }

              // Pobieranie roli z klucza zawierającego URI
              const roleKey =
                'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
              if (decoded[roleKey]) {
                console.log('Rola użytkownika:', decoded[roleKey]);
              } else {
                console.log('Brak roli w tokenie.');
              }
            } catch (error) {
              console.error('Błąd podczas dekodowania tokenu:', error);
            }
          }

          this.errorMessage = null;
        },
        (error: HttpErrorResponse) => {
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else if (error.status === 401) {
            this.errorMessage = 'Nieprawidłowy adres e-mail lub hasło.';
          } else {
            this.errorMessage = `Wystąpił błąd: ${error.message}`;
          }
          console.error('Błąd logowania:', error);
        }
      );
  }
}
