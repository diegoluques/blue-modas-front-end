import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { ProdutoCadastroComponent } from '../produto-cadastro/produto-cadastro.component';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  produtos: Produto[];
  totalItensCarrinho: number;

  @ViewChild("produtoCadastroComponent") child: ProdutoCadastroComponent ;

  constructor(
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.obterProdutros(); 
  }

  handleRefreshEvent(opt: String) {
    this.obterProdutros();
  }

  obterProdutros() {
    this.produtoService.obterProdutros().subscribe(data => {
      this.produtos = data
      this.produtos.sort((a, b) => b.produtoId - a.produtoId)
    });
  }

  deletarItem(idProduto: number) {
    if (confirm('Excluir produto?')) {

      this.produtoService.deletarProduto(idProduto).subscribe(data => {
        this.obterProdutros();
      });
    }
  }

  
  editarItem(produto) {
    
    this.child.editarProduto(produto);
  }

}
