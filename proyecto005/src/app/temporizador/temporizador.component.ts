import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: false,
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent implements OnInit {

  @Input() valorInicial:number = 10;
  @Input() nombre!:string;
  
  contador!:number;
  
  //Nuevo evento se llama finalcountdown
  @Output() finalcountdown = new EventEmitter();
  
  private temporizador!:any
  
  ngOnInit(): void {
    this.contador = this.valorInicial;
  }

  start() {
    this.contador = this.valorInicial;

    this.temporizador = setInterval(() => {
      this.contador--;
      if (this.contador <= 0) {
        this.finalcountdown.emit(this.nombre); //Lnganzamos el evento finalcountdown
        clearInterval(this.temporizador); //Detenemos el temporizador
      }
    }, 1000);
  }



}
