import { Component, OnInit } from '@angular/core';
import { IProducto } from '../i-producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-listadoproductos',
  standalone: false,
  templateUrl: './listadoproductos.component.html',
  styleUrl: './listadoproductos.component.css'
})
export class ListadoproductosComponent implements OnInit {

  productos!:IProducto[];

  constructor(private servicioproductos:ProductosService) { }

  ngOnInit(): void {
    this.servicioproductos.obtenerTodos().subscribe(
      (datos) => {
        this.productos = datos;
        console.log(this.productos);
      }
    );
  }

}
