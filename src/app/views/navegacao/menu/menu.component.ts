import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CestaCompraService } from 'src/app/services/cesta-compra.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() totalItensCarrinho: number;

  constructor(
    private cestaCompraService: CestaCompraService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.carregarInformacoes();
  }

  carregarInformacoes() {
    let idCestaCompra = this.localStorageService.buscar();

    if (idCestaCompra) {
      this.cestaCompraService.obterResumoCarrinho(idCestaCompra).subscribe(data => {
        this.totalItensCarrinho = data.itens.reduce((previous, current) => previous + current.quantidade, 0);
      });
    }
  }

}
