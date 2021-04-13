import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Item } from '../models/item';
import { ResumoCesta } from '../models/resumo-cesta';
import { ServiceBaseService } from './service-base.service';

@Injectable({
  providedIn: 'root'
})
export class CestaCompraService extends ServiceBaseService {

  adicionarProduto(data): Observable<Number> {
    return this.http
      .post<Number>(this.UrlBack + "/CestaCompra/Adicionar", data);
  }

  obterResumoCarrinho(idCesta: number): Observable<ResumoCesta> {
    return this.http
      .get<ResumoCesta>(this.UrlBack + `/CestaCompra/resumo-cesta/${idCesta}`);
  }

  obterResumoPedido(idCesta: number): Observable<ResumoCesta> {
    return this.http
      .get<ResumoCesta>(this.UrlBack + `/CestaCompra/resumo/${idCesta}`);
  }

  deletarItemCarrinho(idItem: number): Observable<Item> {
    return this.http
      .delete<Item>(this.UrlBack + `/CestaCompra/deletar-item/${idItem}`);
  }

  decrementarItemCarrinho(idItem: number): Observable<String> {
    return this.http
      .put<String>(this.UrlBack + `/CestaCompra/decrementar/${idItem}`, "");
  }

  incrementarItemCarrinho(idItem: number): Observable<String> {
    return this.http
      .put<String>(this.UrlBack + `/CestaCompra/incrementar/${idItem}`, "");
  }

  finalizarCompra(idCompra: number, cliente: any): Observable<Number | any> {
    return this.http
      .put(this.UrlBack + `/CestaCompra/finalizar-compra/${idCompra}`, cliente);
  }

}
