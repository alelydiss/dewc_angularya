import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';

  //Ejermplo de hoy
  // nombre = "Alejandro";
  // edad = 19;
  // fumador = false;

  // esFumador() {
  //   return this.fumador ? "Sí" : "No";
  // }

  //Parte 4 del curo de Angular
  // nombre = 'Rodriguez Pablo';
  // edad = 40;
  // email = 'rpablo@gmail.com';
  // sueldos = [1700, 1600, 1900];
  // activo = true;

  // esActivo() {
  //   if (this.activo)
  //     return 'Trabajador Activo';
  //   else
  //     return 'Trabajador Inactivo';
  // }

  // ultimos3Sueldos() {
  //   let suma=0;
  //   for(let x=0; x<this.sueldos.length; x++)
  //     suma+=this.sueldos[x];
  //   return suma;
  // }

  //Parte 5 del curso de Angular
  // nombre = 'Rodriguez Pablo';
  // edad = 40;
  // sueldos = [1700, 1600, 1900];

  // Parte 6 del curso de Angular
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
