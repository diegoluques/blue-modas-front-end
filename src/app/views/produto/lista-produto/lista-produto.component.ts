import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CestaCompraService } from 'src/app/services/cesta-compra.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produtos: Produto[];
  totalItensCarrinho: number;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private cestaCompraService: CestaCompraService
  ) { }

  ngOnInit(): void {
    this.obterProdutros();
  }

  obterProdutros() {
    this.produtoService.obterProdutros().subscribe(data => {
      this.produtos = data
    })
  }

  comprarItem(idProduto: number, ehCompra: boolean) {
    // tem que pegar o Id da Cesta de Compra no LocalStorage
    // Pode estar preenchido ou não 

    let idCompra = this.localStorageService.buscar();
    var model = { idProduto, idCompra };

    // fazer o post para CestoCompra/Adicionar
    this.cestaCompraService.adicionarProduto(model).subscribe(data => {

      // O post vai retornar o ID e este ID vai ser armazenado no LocalStorage
      // Redirecionar para a tela de carrinho

      this.localStorageService.gravar(data);

      if (ehCompra) {
        this.router.navigate(['meu-carrinho']);
      } else {
        window.location.reload();
      }
    });
  }

}
