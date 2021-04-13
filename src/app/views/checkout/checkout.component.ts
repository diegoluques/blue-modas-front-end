import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ResumoCesta } from 'src/app/models/resumo-cesta';
import { CestaCompraService } from 'src/app/services/cesta-compra.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cesta: ResumoCesta;
  itens: Item[];
  valorTotal: Number;
  qtdItens: Number;
  loading: boolean;

  nome: String;
  email: String;
  telefone: String;
  errors: String;

  constructor(
    private router: Router,
    private cestaCompraService: CestaCompraService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.carregarInformacoes();
  }

  carregarInformacoes() {
    let idCestaCompra = this.localStorageService.buscar();

    this.cestaCompraService.obterResumoCarrinho(idCestaCompra).subscribe(data => {
      this.cesta = data;
      this.itens = data.itens;
      this.valorTotal = this.cesta.valorTotal ?? 0;
      this.qtdItens = data.itens.reduce((previous, current) => previous + current.quantidade, 0);
    });
  }

  finalizarCompra() {

    this.loading = true;
    this.errors = null;
    let data = {
      nomeCliente: this.nome,
      email: this.email,
      telefone: this.telefone
    };

    let idCestaCompra = this.localStorageService.buscar();
    
    this.cestaCompraService.finalizarCompra(idCestaCompra, data) 
    .subscribe(data => {

      if (typeof data === 'number'){
         this.localStorageService.deletar();
          this.router.navigate(['compra-realizada', idCestaCompra]); 
      } else{

        this.errors = data.message;
        this.loading = false;
      }
     
    });
  }
}
