import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_BASE ="https://ejerciciostutorialesya.com/vue/datos.php";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpclient:HttpClient) { }

  //Implementr los metodos necesarios para:
  //rescatar los productos de la API
  //restcar un producto determinado
  //actualizar
  //eliminar

  obtenerTodos(){
    //Devolvera un observable
    return this.httpclient.get<any>(`${URL_BASE}`);
  }
}
