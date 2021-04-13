import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    { path: 'adm/produto', component: MeuCarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
