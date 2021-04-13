import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  nome: String;
  preco: String;
  imagem: String;
  loading: boolean;

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    this.loading = true;

    let data = {
      nomeProduto: this.nome,
      precoProduto: this.preco,
      urlImage: this.imagem
    };
    
    this.produtoService.cadastrarProduto(data).subscribe(data => {
      this.loading = false;
      this.router.navigate(['adm/produto-listagem']);
    });
  }

}
