import { VeiculoTerrestre } from "./VeiculoTerrestre";


export class Automovel extends VeiculoTerrestre {
    private _tipoCombustivel: string;
    

    constructor(tipoCombustivel: string , marca: string, modelo: string) {
        super(marca, modelo);
        this._tipoCombustivel = tipoCombustivel;
    }


    public get tipoCombustivel(): string {
        return this._tipoCombustivel;
    }
    public set tipoCombustivel(value: string) {
        this._tipoCombustivel = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`tipoCombustivel: ${this._tipoCombustivel}`);
    }
}
