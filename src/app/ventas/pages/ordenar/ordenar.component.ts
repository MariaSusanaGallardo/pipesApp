import { Component, OnInit } from '@angular/core';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent{

  enMayusculas: boolean = true;

  ordenarPor: string = '';

 heroes: Heroe[] = [
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Wonder Woman',
    vuela: true,
    color: Color.rojo
  },
  {
    nombre: 'Hulk',
    vuela: false,
    color: Color.verde
  }

 ]


  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor)
  }

}
