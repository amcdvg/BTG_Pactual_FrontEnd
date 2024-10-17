import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(private router: Router, private authService: AuthService) {}
  handleNext() {

      this.router.navigate(['/dashboard']);  // Redirige al dashboard después de autenticarse
    
  }
}

