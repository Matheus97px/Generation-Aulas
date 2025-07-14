import { PagRepository } from "../repository/PagRepository";
import { MetodoPagamento } from "../model/MetodoPagamento";

export class PagController implements PagRepository {

    private metodo : MetodoPagamento;

    constructor(metodo: MetodoPagamento){
        this.metodo = metodo;
    }

    realizarPagamento(valor: number): void {
        if (valor > this.metodo.saldo) {
            throw new Error(`Saldo insuficiente.`);
        }

        this.metodo.debitar(valor);
        console.log(`Pagamento de R$:${valor} realizado com sucesso`)
    }


    exibirSaldo() {
      this.metodo.verificarSaldo();  
    }
}