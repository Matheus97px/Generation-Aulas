import { Cordenador } from "./Cordenador";
import { Funcionario } from "./Funcionario";
import { Professor } from "./Professor";


export function main(){

 const professorBiologia = new Professor("Joaquim", 5000, 10);
 const cordenadorPedagogico = new Cordenador("Joao", 7000, 10);

 professorBiologia.descreverFuncao();
 cordenadorPedagogico.descreverFuncao();

}

main();