import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://54.237.13.164:8000/login/'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`; // Crea la URL con query parameters

    return this.http.post(url, {}); // Envía un objeto vacío como body
  }

  // Guardar el token en el localStorage o sessionStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Guardar el correo electrónico en el localStorage
  setEmail(emailUser: string): void {
    localStorage.setItem('userEmail', emailUser);
  }

  // Guardar el nombre en el localStorage o sessionStorage
  setUser(user: string): void {
    localStorage.setItem('authToken', user);
  }
   // Obtener el correo electrónico en el localStorage
  getEmail(): string | null{
    return localStorage.getItem('userEmail');
  }
  // Obtener el token del almacenamiento
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Obtener el usuario del almacenamiento
  getUser(): string | null {
    return localStorage.getItem('authToken');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken(); // Retorna true si hay un token almacenado
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('authToken'); // Remueve el token del almacenamiento
  }
}
