import { Produto } from "./produto";

export interface Item {
    itemCompraId: number;
    cestaCompraId: number;
    produtoId: number;
    produto: Produto;
    quantidade: number;
    valorUnitario: number; 
}