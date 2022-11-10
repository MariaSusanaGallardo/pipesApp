import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  //propíedades para texto

  nombreLower: string = 'susana';
  nombreUpper: string = 'SUSANA';
  nombreCompleto: string = 'sUsAna'

  //para date

  fecha: Date = new Date(); //el día de hoy



}
