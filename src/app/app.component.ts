import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { SumButtonComponent } from './sum-button/sum-button.component';
import { PrimeNumbersComponent } from "./prime-numbers/prime-numbers.component";
import { LoginComponent } from "./login/login.component";
import { UserDetailsComponent } from "./user-detail/user-detail.component";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from '@angular/common/http';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { GetAllUsersComponent } from "./get-all-users/get-all-users.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Input1Component,
    Input2Component,
    SumButtonComponent, PrimeNumbersComponent,
    HttpClientModule, LoginComponent, UserDetailsComponent, RegisterComponent, ChangePasswordComponent, DeleteUserComponent, GetAllUsersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moja-aplikacja';
  liczba1: number = 0;
  liczba2: number = 0;

  ustawLiczba1(wartosc: number) {
    this.liczba1 = wartosc;
  }

  ustawLiczba2(wartosc: number) {
    this.liczba2 = wartosc;
  }
}
