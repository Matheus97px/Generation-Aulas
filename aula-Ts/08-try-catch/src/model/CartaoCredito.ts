import { MetodoPagamento } from "./MetodoPagamento";

export class CartaoCredito extends MetodoPagamento {

    verificarSaldo(): void {
        console.log(`\n Saldo disponivel no Cartao de Crédito: R$:${this._saldo.toFixed(2)}\n`);

    }

}