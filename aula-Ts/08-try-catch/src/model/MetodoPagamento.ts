export abstract class MetodoPagamento {
    protected _saldo: number;


    constructor(saldo: number) {
        this._saldo = saldo;
    } 

    get saldo(): number {
        return this._saldo;
    }
    set saldo(value: number) {
        this._saldo = value;
    }

    debitar(valor: number){
        this._saldo -= valor;
    }

    verificarSaldo(){
        console.log(`\n Saldo Atual: R$:${this._saldo.toFixed(2)}\n`);
    }

}
