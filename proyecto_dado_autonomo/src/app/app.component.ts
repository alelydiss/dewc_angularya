import { Component, ViewChild } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juego dados';

  @ViewChild('dado1') midado1!:DadoComponent;
  @ViewChild('dado2') midado2!:DadoComponent;
  @ViewChild('dado3') midado3!:DadoComponent;
  resultado = "";

  lanzarDados() {
    this.midado1.lanzar();
    this.midado2.lanzar();
    this.midado3.lanzar();

    // alert(`dado1:${this.midado1.valor} \n dado2:${this.midado2.valor} \n dado3:${this.midado3.valor}`);
    this.comprobarResultado();
  }

  comprobarResultado() {
    if(this.midado1.valordado == this.midado2.valordado && this.midado1.valordado == this.midado3.valordado) {
      this.resultado = "Ha ganado!";
    } else {
      this.resultado = "-";
    }
  }
}
