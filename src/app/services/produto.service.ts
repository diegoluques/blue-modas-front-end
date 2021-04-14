import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { ServiceBaseService } from './service-base.service';

@Injectable()
export class ProdutoService extends ServiceBaseService {
 
  obterProdutros(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(this.UrlBack + "/produto");
  }

  cadastrarProduto(data): Observable<Produto> {
    return this.http
      .post<Produto>(this.UrlBack + "/produto", data);
  }
  
  atualizarProduto(idProduto: number): Observable<String> {
    return this.http
      .put<String>(this.UrlBack + `/produto/${idProduto}`, "");
  }

  deletarProduto(idProduto: number): Observable<any> {
    return this.http
      .delete(this.UrlBack + `/produto/${idProduto}`);
  }

}