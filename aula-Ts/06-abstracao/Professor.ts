import { Funcionario } from "./Funcionario";

export class Professor extends Funcionario{
    private _numeroDeAulas: number;
    constructor(nome: string, salario: number, numeroDeAulas: number) {
        super(nome, salario);
        this._numeroDeAulas = numeroDeAulas;
    }


     descreverFuncao(): void {
        console.log("o Professor é responsavel por ministrar aulas")
    }
}