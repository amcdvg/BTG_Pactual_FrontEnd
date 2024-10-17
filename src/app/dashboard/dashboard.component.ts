import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  isSidebarHidden: boolean = false;
  userName: string | null = null;
  authToken: string | null = null;
  optionSelected: boolean = false; // Cambia a true cuando se toma una opción

  constructor(private router: Router, private authService: AuthService) {}


  // Método para manejar la selección de una opción
  selectOption() {
    this.optionSelected = true;
  }

  ngOnInit(): void {
    this.userName = this.authService.getUser(); // Obtener el nombre del usuario
    this.authToken = this.authService.getToken(); // Obtener el token
    this.router.navigate(['/dashboard/info']);
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  logout(): void {
    this.authService.logout(); // Llama al método de logout
    this.userName = null; // Limpia el nombre de usuario después de cerrar sesión
    this.authToken = null;
    this.router.navigate(['/login']); // Redirige al login o página principal
  }
}
