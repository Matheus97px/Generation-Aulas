export abstract class  Funcionario {
    private _nome: string;
    private _salario: number;


    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    public get nome(): string {
        return this._nome;
    }

    public get salario(): number {
        return this._salario;
    }
     
    public set nome(value: string) {
        this._nome = value;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    abstract descreverFuncao(): void
}