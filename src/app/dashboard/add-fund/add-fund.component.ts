import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-bonding-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.scss'],
})
export class BondingFundComponent {
  fund: string = '';
  notification: string = '';
  investedAmount: number | null = null;
  email: string | null = null;
  responseData: any = null;
  isLoading: boolean = false; // Variable para manejar el loader
  errorMessage: string | null = null; // Propiedad para el mensaje de error

  constructor(private http: HttpClient, private authService: AuthService) {}

  submitForm() {
    this.email = this.authService.getEmail();

    // Limpiar los datos del formulario justo al hacer clic en "Submit"

    // Validar que el email no sea null antes de continuar
    if (!this.email) {
      console.error('Error: El correo electrónico no está definido.');
      return;
    }

    const url = 'https://jka3t1xyq1.execute-api.us-east-1.amazonaws.com/vinculatedBodingFund';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
    });

    const requestBody = {
      _id: '', // Puedes dejar esto vacío si no lo necesitas
      fundId: this.fund,
      investedAmount: this.investedAmount,
      bondingDate: new Date().toISOString(),
      userId: '', // Si necesitas el userId, puedes obtenerlo de alguna manera
      notificationPreferences: this.notification,
      notificationId: '', // Igual que _id, puedes dejar esto vacío si no es necesario
      uniqueNumber: '', // Si es necesario, deberías definir cómo se genera
      email: this.email, // Incluir el correo electrónico aquí
      fund: this.fund, // Incluir el fund aquí, asegurándote de que tenga el valor correcto
    };

    console.log(requestBody);

    // Mostrar loader
    this.isLoading = true;

    this.http.post(url, requestBody, { headers }).subscribe(
      (response: any) => {
        this.responseData = response.data;
        console.log('Response:', response);

        // Limpiar el mensaje de error en caso de éxito
        this.errorMessage = null;
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Ocurrió un error al procesar la solicitud.'; // Establece el mensaje de error
      },
      () => {
        // Ocultar loader
        this.isLoading = false;
      }
    );
    this.resetForm();
  }

  // Método para limpiar los datos del formulario
  resetForm() {
    this.fund = '';
    this.notification = '';
    this.investedAmount = null;
    this.responseData = null; // Limpiar la respuesta
    this.errorMessage = null; // Restablecer el mensaje de error
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options); // Formato en español
  }
}
