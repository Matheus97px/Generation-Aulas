import { MetodoPagamento } from "./MetodoPagamento";

export class Pix extends MetodoPagamento {

    verificarSaldo(): void {
        console.log(`Saldo indisponivel no Pix: R$${this._saldo.toFixed(2)}`);
    }
}