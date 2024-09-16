import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';  // Import UserService
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule]  // Standalone imports
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.changePasswordForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      this.userService.changePassword(this.changePasswordForm.value).subscribe({
        next: (response: string) => {
          console.log(response); // Odpowiedź powinna być tekstem
          this.message = response;  // Wyświetlamy odpowiedź serwera
        },
        error: (err) => {
          console.error('Error:', err);
          this.message = 'Failed to change password';
        }
      });
    }
  }
}
