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

}