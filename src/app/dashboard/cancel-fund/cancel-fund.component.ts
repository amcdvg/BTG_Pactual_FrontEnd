import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cancel-fund',
  templateUrl: './cancel-fund.component.html',
  styleUrls: ['./cancel-fund.component.scss']
})
export class CancelFundComponent implements OnInit {
  funds: any[] = []; // Almacena la lista de fondos activos
  isLoading: boolean = false; // Variable para manejar el loader
  errorMessage: string | null = null; // Para mensajes de error
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 5; // Cantidad de fondos por página
  isCancelling: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFunds(); // Llama al método para obtener los fondos al iniciar el componente
  }

  fetchFunds() {
    const url = 'http://107.21.198.29:8000/getFundViculate/';
    const headers = new HttpHeaders({
      accept: 'application/json',
    });

    this.isLoading = true;

    this.http.get(url, { headers }).subscribe(
      (response: any) => {
        if (response.status === 200) {
          this.funds = response.data.filter((fund: any) => fund.status === 'Active');
        } else {
          this.errorMessage = response.message; // Manejo de errores
        }
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Ocurrió un error al obtener los fondos.';
      },
      () => {
        this.isLoading = false; // Ocultar loader
      }
    );
  }

  cancelFund(fundId: string) {
    const url = `http://107.21.198.29:8000/canceledBodingFund/?Id=${encodeURIComponent(fundId)}`;
    const headers = new HttpHeaders({
      accept: 'application/json',
    });
    this.isCancelling = true; // Mostrar el loader de cancelación
    this.http.post(url, {}, { headers }).subscribe(
      (response: any) => {
        if (response.status === 200) {
          alert('El fondo fue cancelado exitosamente.');
          this.fetchFunds(); // Refrescar la lista de fondos después de cancelar
        } else {
          alert('No se pudo cancelar el fondo: ' + response.message);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Ocurrió un error al cancelar el fondo.');
      },
      () => {
        this.isCancelling = false; // Ocultar el loader de cancelación
      }
    );
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options); // Formato en español
  }

  // Métodos para paginación
  paginatedFunds() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.funds.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.funds.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
