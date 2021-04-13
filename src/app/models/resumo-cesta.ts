import { Cliente } from "./cliente";
import { Item } from "./item";

export interface ResumoCesta {
    cestaCompraId: number;
    itens: Item[];
    cliente?: Cliente;
    valorTotal: number;
}