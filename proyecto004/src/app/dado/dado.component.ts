import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {

  @Input() valor!:number; //El decorador @Input() indica que la propiedad valor es un parámetro de entrada

}
