import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {
  
  valor = 1;

  ngOnInit(): void {
    this.valor = this.getAleatorio();
  }

  // constructor() {
  //   this.valor = this.getAleatorio();
  // }

  getAleatorio() {
    return Math.floor(Math.random() * 6) + 1; //Genera un número aleatorio entre 1 y 6
  }

}
