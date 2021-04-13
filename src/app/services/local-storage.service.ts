import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  buscar() {
    return JSON.parse(localStorage.getItem('BlueModas:IdCestaCompra') || null);
  }

  gravar(idCesta: Number) {
    localStorage.setItem("BlueModas:IdCestaCompra", JSON.stringify(idCesta));
  }

  deletar() {
    localStorage.removeItem("BlueModas:IdCestaCompra");
  }

}
