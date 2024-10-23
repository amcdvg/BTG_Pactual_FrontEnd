import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true; // Para ocultar/mostrar la contraseña
  isClicked = false;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login successful', response);

          // Aquí puedes redirigir al usuario a otra página si el login es exitoso
          this.loginForm.reset();
          const token = response.data.token;
          this.authService.setToken(token);
          const user = response.data.nameUser;
          console.log(user)
          this.authService.setUser(user);
          console.log(this.authService.getUser())
          this.authService.setEmail(email);
          this.router.navigate(['/welcome']);
        },
        error: (error) => {
          console.error('Login failed', error);
          // Muestra un alert si las credenciales son incorrectas
          alert('Los datos son incorrectos. Por favor, verifica tu email y contraseña.');
          this.loginForm.reset();
        }
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
      this.loginForm.reset();
    }
  }

  onNewUser() {
    this.router.navigate(['/register']); // O la ruta que desees para el registro
  }

}
