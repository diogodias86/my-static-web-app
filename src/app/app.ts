import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, Field, required, email, submit } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
  createdAt: string;
}

@Component({
  selector: 'app-root',
  imports: [Field, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: true,
    createdAt: '1986-08-01',
  });

  loginForm = form(this.loginModel, (field) => {
    //required(field.email, { message: 'Email é requerido' });
    //email(field.email, { message: 'Email inválido' });
    //required(field.password, { message: 'Senha é requerida' });
  });

  date: Date | null = null;

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging with: ', credentials);

      this.date = new Date(this.loginModel().createdAt);

      //console.log(date.toLocaleDateString());
    });
  }
}
