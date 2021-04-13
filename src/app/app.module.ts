import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoService } from './services/produto.service';
import { HomeComponent } from './views/navegacao/home/home.component';
import { ListaProdutoComponent } from './views/produto/lista-produto/lista-produto.component';
import { MenuComponent } from './views/navegacao/menu/menu.component';
import { FooterComponent } from './views/navegacao/footer/footer.component';
import { MeuCarrinhoComponent } from './views/meu-carrinho/meu-carrinho.component'; 

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LocalStorageService } from './services/local-storage.service';
import { CestaCompraService } from './services/cesta-compra.service';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { CompraRealizadaComponent } from './views/compra-realizada/compra-realizada.component'; 
import { FormsModule } from '@angular/forms';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaProdutoComponent,
    MenuComponent,
    FooterComponent,
    MeuCarrinhoComponent, 
    CheckoutComponent,
    CompraRealizadaComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProdutoService, 
    CestaCompraService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
