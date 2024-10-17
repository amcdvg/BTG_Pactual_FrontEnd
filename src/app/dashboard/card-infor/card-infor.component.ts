import { Component } from '@angular/core';

@Component({
  selector: 'app-cardinf',
  templateUrl: './card-infor.component.html',
  styleUrls: ['./card-infor.component.scss']
})
export class CardinfComponent {
  // Lógica adicional si es necesario
  handleNext() {
    console.log('Siguiente clicado');
  }
}
