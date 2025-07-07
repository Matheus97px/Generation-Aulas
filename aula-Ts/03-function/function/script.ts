import { somar,somar2,mostrarIdadeOuNome,dobraOuSomar } from "./exemploFuncao";
import readLine = require('readline-sync');




function main(): void {
     const numero1 = readLine.questionInt("Digite um numero: ");
    // const numero2 = readLine.questionInt("Digite outro numero: ");
    console.clear();
    // console.log(`O resultado da soma é ${somar(numero1, numero2)}`);
    // somar2(numero1,numero2);

    // mostrarIdadeOuNome(5);
    console.log(`Resultado: ${dobraOuSomar(numero1)}`);    
}

main();