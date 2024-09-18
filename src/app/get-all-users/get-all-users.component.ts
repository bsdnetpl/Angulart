import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css',
})
export class GetAllUsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      },
      () => {
        // Funkcja complete, która jest wywoływana, gdy obserwowalny obiekt zostanie zamknięty
      }
    );
  }
}
