import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'; // Import UserService
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule] // Dodaj HttpClientModule do imports
})
export class DeleteUserComponent {
  deleteUserForm: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.deleteUserForm = this.fb.group({
      userName: ['', Validators.required] // Pole do wprowadzenia nazwy użytkownika
    });
  }

  onSubmit() {
    if (this.deleteUserForm.valid) {
      const userName = this.deleteUserForm.get('userName')?.value;

      this.userService.deleteUser(userName).subscribe({
        next: (response) => {
          this.message = response.message || `User '${userName}' deleted successfully.`;
        },
        error: (err) => {
          console.error('Error:', err);
          this.message = 'Failed to delete user.';
        }
      });
    }
  }
}
