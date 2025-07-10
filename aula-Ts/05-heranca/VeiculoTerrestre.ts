export class VeiculoTerrestre {
    private _marca: string;
    private _modelo: string;

    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
    }

    public get marca(): string {
        return this._marca;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    public set modelo(value: string) {
        this._modelo = value;
    }

    public visualizar(): void {
        console.log(`Marca: ${this._marca}, Modelo: ${this._modelo}`);

    }




}