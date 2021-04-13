import { Item } from "./item";

export interface Produto {
    produtoId: number;
    nomeProduto: string;
    precoProduto: string;
    urlImage: string;
    itensCompra: Item[]
}