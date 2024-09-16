import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sum-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sum-button.component.html',
  styleUrl: './sum-button.component.css',
})
export class SumButtonComponent {
  @Input() liczba1: number = 0;
  @Input() liczba2: number = 0;
  wynik: number = 0;

  sumuj() {
    this.wynik = this.liczba1 + this.liczba2;
    console.log('Wynik sumowania:', this.wynik);
  }
}
