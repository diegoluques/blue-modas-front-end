import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ResumoCesta } from 'src/app/models/resumo-cesta';
import { CestaCompraService } from 'src/app/services/cesta-compra.service';

@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrls: ['./compra-realizada.component.css']
})
export class CompraRealizadaComponent implements OnInit {
  cesta: ResumoCesta;
  totalItensCarrinho: number = 0;
  qtdItensResumo: Number;

  constructor(
    private cestaCompraService: CestaCompraService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obterResumoPedido();
  }

  obterResumoPedido() {
    this.route.paramMap.subscribe(params => {
      let idCestaCompra = +params.get("id");
      this.cestaCompraService.obterResumoPedido(idCestaCompra).subscribe(data => {
        this.cesta = data;
        this.qtdItensResumo = data.itens.reduce((previous, current) => previous + current.quantidade, 0);
      });
    });
  }

}
