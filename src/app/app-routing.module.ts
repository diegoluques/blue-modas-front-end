import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCadastroComponent } from './views/adm/produto-cadastro/produto-cadastro.component';
import { ProdutoListagemComponent } from './views/adm/produto-listagem/produto-listagem.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { CompraRealizadaComponent } from './views/compra-realizada/compra-realizada.component';
import { MeuCarrinhoComponent } from './views/meu-carrinho/meu-carrinho.component';
import { HomeComponent } from './views/navegacao/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'meu-carrinho', component: MeuCarrinhoComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'compra-realizada/:id', component: CompraRealizadaComponent },
    { path: 'adm/produto-listagem', component: ProdutoListagemComponent },
    { path: 'adm/produto-cadastro', component: ProdutoCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
