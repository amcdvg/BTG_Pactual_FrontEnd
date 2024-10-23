import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Transaction {
  bondingFundId: string;
  date: string;
  uniqueNumber: string;
  fundsInvestment: {
    notification: string;
  };
  status: string;
  fund: {
    name: string;
    category: string;
  };
  fundId: string;
  amount: number;
  id: string;
  type: string;
}

@Component({
  selector: 'app-historial-transaction',
  templateUrl: './historial-transaction.component.html',
  styleUrls: ['./historial-transaction.component.scss']
})
export class HistorialTransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 8; // Número de elementos por página

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this.http.get<{ status: number; message: string; data: Transaction[] }>('https://z9fftw2tb1.execute-api.us-east-1.amazonaws.com/getTransactions')
      .subscribe(response => {
        if (response.status === 200) {
          this.transactions = response.data;
          console.log(this.transactions)
          this.transactions.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime(); // Ordena de más reciente a más antiguo
          });

        } else {
          console.error('Error fetching transactions:', response.message);
        }
      }, error => {
        console.error('HTTP error:', error);
      });
  }

  // Método para obtener los elementos de la página actual
  get currentTransactions(): Transaction[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.transactions.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Método para cambiar de página
  changePage(page: number): void {
    this.currentPage = page;
  }

  // Método para calcular el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.transactions.length / this.itemsPerPage);
  }
}

