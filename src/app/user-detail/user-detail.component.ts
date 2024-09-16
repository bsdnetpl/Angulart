import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule,CommonModule],
})
export class UserDetailsComponent {
  userDetails: any = null; // Zmienna na przechowywanie danych użytkownika
  errorMessage: string | null = null;
  searchForm: FormGroup; // Formularz wyszukiwania

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    // Inicjalizacja formularza wyszukiwania
    this.searchForm = this.formBuilder.group({
      userName: '', // Pole formularza na nazwę użytkownika
    });
  }

  // Funkcja do pobrania danych użytkownika
  getUserDetails(userName: string) {
    this.http
      .get<any>(`https://localhost:7106/api/Users/${userName}`)
      .subscribe(
        (response) => {
          this.userDetails = response;
          this.errorMessage = null;
          console.log('Odebrane dane użytkownika:', this.userDetails);
        },
        (error) => {
          console.error('Błąd podczas pobierania danych:', error);
          this.userDetails = null; // Czyszczenie poprzednich wyników
          this.errorMessage = 'Wystąpił błąd podczas pobierania danych.';
        }
      );
  }

  // Obsługa wyszukiwania po nazwie użytkownika
  onSubmit() {
    const userName = this.searchForm.get('userName')?.value;
    if (userName) {
      this.getUserDetails(userName);
    } else {
      this.errorMessage = 'Proszę wprowadzić nazwę użytkownika.';
      this.userDetails = null; // Czyszczenie wyników, jeśli brak nazwy
    }
  }
}
