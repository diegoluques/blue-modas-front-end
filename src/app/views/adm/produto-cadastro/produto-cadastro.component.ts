import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  @Output() refreshEvent = new EventEmitter<string>();
  @ViewChild('closeButton') closeButton: ElementRef;
  @ViewChild('openModalButton') openModalButton: ElementRef;

  nome: any;
  preco: any;
  loading: boolean;
  uploadForm: any;
  imagem: any;
  operacao: string;
  produtoId: string;

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.operacao = 'Inserção';
  }

  editarProduto(produto) {
    this.openModalButton.nativeElement.click();
    this.operacao = 'Atualização';
    this.produtoId = produto.produtoId;
    this.nome = produto.nomeProduto;
    this.preco = produto.precoProduto;
  }

  handleChangeImage(event) {
    if (event.target.files.length > 0) {
      this.uploadForm = event.target.files[0];
    }
  }

  novoProduto() {
    this.limparCampos();
    this.operacao = 'Inserção';
  }

  salvarProduto(){
    if (this.operacao == 'Inserção') {
      this.cadastrarProduto();
    }else {
      this.atualizarProduto();
    }
  }

  atualizarProduto() {
    this.loading = true;

    let data ={
      nomeProduto: this.nome,
      precoProduto: this.preco
    }
 
    this.produtoService.atualizarProduto(this.produtoId, data).subscribe(data => {
      this.loading = false;

      this.limparCampos();

      this.closeButton.nativeElement.click();
      this.refreshEvent.emit("atualizar");
    });
  }

  cadastrarProduto() {
    this.loading = true;

    let formData = new FormData();
    formData.append('nomeProduto', this.nome);
    formData.append('precoProduto', this.preco);
    formData.append('foto', this.uploadForm);

    this.produtoService.cadastrarProduto(formData).subscribe(data => {
      this.loading = false;

      this.limparCampos();

      this.closeButton.nativeElement.click();
      this.refreshEvent.emit("atualizar");
    });
  }

  private limparCampos() {
    this.nome = "";
    this.preco = "";
    this.uploadForm = null;
    this.imagem = "";
  }

}
