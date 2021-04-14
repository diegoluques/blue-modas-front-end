import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  produtos: Produto[];
  totalItensCarrinho: number;

  constructor(
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.obterProdutros();
  }

  obterProdutros() {
    this.produtoService.obterProdutros().subscribe(data => {
      this.produtos = data
      this.produtos.sort((a, b) => b.produtoId - a.produtoId)
    });
  }

  deletarItem(idProduto: number) {
    this.produtoService.deletarProduto(idProduto).subscribe(data => {
      this.obterProdutros();
    });
  }

}
