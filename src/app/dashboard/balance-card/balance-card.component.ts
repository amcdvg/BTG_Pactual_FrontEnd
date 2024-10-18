import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BalanceResponse {
  status: number;
  message: string;
  data: {
    name: string;
    email: string;
    phoneNumbeer: string;
    Balance: number;
    IdBalance: string;
  };
}

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss']
})
export class BalanceCardComponent implements OnInit {
  balanceData: BalanceResponse | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    this.http.get<BalanceResponse>('http://54.237.13.164:8000/getBalance/')
      .subscribe(response => {
        this.balanceData = response;
      }, error => {
        console.error('Error fetching balance data', error);
      });
  }
}
