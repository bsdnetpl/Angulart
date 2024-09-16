import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Dodaj to
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prime-numbers',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './prime-numbers.component.html',
  styleUrl: './prime-numbers.component.css'
})
export class PrimeNumbersComponent {
  start: number = 0;
  end: number = 0;
  primes: number[] = [];

  // Funkcja sprawdzająca, czy liczba jest pierwsza
  isPrime(liczba: number): boolean {
    if (liczba <= 1) return false;

    for (let i = 2; i <= Math.sqrt(liczba); i++) {
      if (liczba % i === 0) {
        return false;
      }
    }

    return true;
  }

  // Funkcja wyszukująca liczby pierwsze w podanym zakresie
  findPrimes(): void {
    this.primes = [];
    for (let i = this.start; i <= this.end; i++) {
      if (this.isPrime(i)) {
        this.primes.push(i);
      }
    }
  }
}
