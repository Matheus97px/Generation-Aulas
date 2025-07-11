import { Funcionario } from "./Funcionario";

export class Cordenador extends Funcionario {
    private _numeroDeProjetos: number;
   
 constructor(nome: string, salario: number, numeroDeProjetos: number) {
     super(nome, salario);
     this._numeroDeProjetos = numeroDeProjetos
 }
 
 
  public get numeroDeProjetos(): number {
        return this._numeroDeProjetos;
    }
    public set numeroDeProjetos(value: number) {
        this._numeroDeProjetos = value;
    }
 
 

    public descreverFuncao(): void {
        console.log("o Cordenador é responsavel por gerenciar os projetos")

    }
}