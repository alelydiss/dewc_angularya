import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {

  private valor = 1;

  ngOnInit(): void {
      this.lanzar();
  }

  get valordado() {
    return this.valor;
  }
  
  lanzar() {
    this.valor = this.generarAleatorio();
  }

  generarAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  getImageDado() {
    return `imagenes/dado${this.valor}.png`;
  }

}
