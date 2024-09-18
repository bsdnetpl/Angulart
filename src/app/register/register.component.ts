import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';  // Dodaj ten import

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private http: HttpClient) {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe({
        next: (response) => {
          this.message = response.message; // "User registered successfully"
        },
        error: (err) => {
          console.error(err);
          this.message = 'Registration failed';
        }
      });
    }
  }
}
