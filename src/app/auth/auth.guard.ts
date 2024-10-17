import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';  // Servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) { // Método que verifica si el usuario está autenticado
      return true;
    } else {
      this.router.navigate(['/login']);  // Si no está autenticado, lo redirige al login
      return false;
    }
  }
}
