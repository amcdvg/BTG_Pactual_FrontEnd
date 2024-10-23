import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true;
  isClicked = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      hashedPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmHashedPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('hashedPassword')?.value;
    const confirmPassword = form.get('confirmHashedPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      const userData = {
        id: 'string',
        email: this.registerForm.value.email,
        hashedPassword: this.registerForm.value.hashedPassword,
        fullName: this.registerForm.value.fullName,
        phoneNumber: this.registerForm.value.phoneNumber,
        isActive: true,
        isSuperuser: true,
        createdAt: new Date().toISOString()
      };
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        accept: 'application/json',
      });

      // Primera solicitud: Registro de usuario
      this.http.post('https://9nhhs2lgv5.execute-api.us-east-1.amazonaws.com/registerUser', userData, { headers })
      .subscribe(
        response => {
          console.log('Registro exitoso', response);

          // Segunda solicitud: Agregar cuenta después del registro
          const accountData = {
            id: 'string',
            userId: "string",  // Reemplaza con el valor adecuado
            amount: 500000,
            createdAt: new Date().toISOString(),
            email: this.registerForm.value.email
          };

          this.http.post('https://9nhhs2lgv5.execute-api.us-east-1.amazonaws.com/addAccount', accountData, { headers })
          .subscribe(
            accountResponse => {
              console.log('Cuenta añadida exitosamente', accountResponse);
              this.router.navigate(['']); // Redirigir al componente de login
            },
            accountError => {
              console.error('Error al agregar la cuenta', accountError);
              alert('Error al agregar la cuenta. Por favor, intenta nuevamente.');
            }
          );
        },
        error => {
          console.error('Error en el registro', error);
          if (error.status === 400 && error.error.detail === "Email already registered") {
            alert('Este correo electrónico ya está registrado. Por favor, intenta con otro.');
          } else {
            alert('Hubo un error al registrar el usuario. Por favor, intenta nuevamente.');
          }
        }
      );
    } else {
      alert('Las contraseñas no coinciden. Por favor, intenta nuevamente.');
    }
  }

  navigateToLogin() {
    this.router.navigate(['']); // Redirigir al componente de login
  }
}
