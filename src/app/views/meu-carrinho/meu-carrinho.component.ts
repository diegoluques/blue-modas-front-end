import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ResumoCesta } from 'src/app/models/resumo-cesta';
import { CestaCompraService } from 'src/app/services/cesta-compra.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-meu-carrinho',
  templateUrl: './meu-carrinho.component.html',
  styleUrls: ['./meu-carrinho.component.css']
})
export class MeuCarrinhoComponent implements OnInit {

  cesta: ResumoCesta;
  itens: Item[];
  valorTotal: Number;
  totalItensCarrinho: number;

  constructor(
    private localStorageService: LocalStorageService,
    private cestaCompraService: CestaCompraService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarInformacoes();
  }

  carregarInformacoes() {
    let idCestaCompra = this.localStorageService.buscar();

    if (idCestaCompra) {
      this.cestaCompraService.obterResumoCarrinho(idCestaCompra).subscribe(data => {
        this.cesta = data;
        this.itens = data.itens;
        this.valorTotal = this.cesta.valorTotal;
        this.totalItensCarrinho = data.itens.reduce((previous, current) => previous + current.quantidade, 0);
      });
    }
  }

  continuarComprando() {
    this.router.navigate(['home']);
  }

  removerItem(idItem: number) {
    this.cestaCompraService.deletarItemCarrinho(idItem).subscribe(data => {
      this.carregarInformacoes();
    });
  }

  decrementarItem(item: Item) {
    this.cestaCompraService.decrementarItemCarrinho(item.itemCompraId).subscribe(data => {
      this.carregarInformacoes();
    });
  }

  incrementarItem(item: Item) {
    this.cestaCompraService.incrementarItemCarrinho(item.itemCompraId).subscribe(data => {
      this.carregarInformacoes();
    });
  }

}
