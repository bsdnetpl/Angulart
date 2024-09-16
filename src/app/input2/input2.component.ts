import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Upewnij się, że ten import jest dodany
@Component({
  selector: 'app-input2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input2.component.html',
  styleUrl: './input2.component.css'
})
export class Input2Component {
  liczba2: number = 0;

  @Output() liczba2Zmiana = new EventEmitter<number>();

  onLiczba2Zmiana() {
    this.liczba2Zmiana.emit(this.liczba2);
  }
}
