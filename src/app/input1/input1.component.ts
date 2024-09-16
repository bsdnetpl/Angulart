import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Upewnij się, że ten import jest dodany

@Component({
  selector: 'app-input1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input1.component.html',
  styleUrl: './input1.component.css'
})
export class Input1Component {
  liczba1: number = 0;

  @Output() liczba1Zmiana = new EventEmitter<number>();

  onLiczba1Zmiana() {
    this.liczba1Zmiana.emit(this.liczba1);
  }
}
