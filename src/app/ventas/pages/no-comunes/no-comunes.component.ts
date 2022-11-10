import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent  {

//i18nSelect

nombre: string = 'Susana';
genero: string = 'femenino';

estimadoMapa = {
  masculino: 'Estimado',
  femenino: 'Estimada'
}

//i18nPlural

clientes: string[] = ['María', 'Pedro', 'Juanita', 'Pepe'];

clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando',
  '=1': 'tenemos un cliente esperando',
  '=2': 'tenemos 2 clientes esperando',
  'other': 'tenemos # clientes esperando'
}

cambiarCliente() {
  this.nombre = 'Juan';
  this.genero = 'masculino';

}

borrarCliente(){
  this.clientes.pop();

}

//keyvalue pip

persona = {
  nombre: 'Susana',
  edad: 35,
  direccion: 'Santiago, Chile'
}

//json pipe

heroes = [
  {
    nombre: 'Superman',
    vuela: true  
  },
  {
    nombre: 'Wonder Woman',
    vuela: true  
  },
  {
    nombre: 'Batman',
    vuela: false
  }
];


//Async pipe

miObservable = interval(1000); //0,1,2... 

//a traves de promesa

valorPromesa = new Promise((resolve, reject) => {

  setTimeout (() => {
    resolve('Tenemos data de promesa');
  }, 3500 );

});




}
