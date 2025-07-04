const readLine = require('readline-sync');


console.log("#####################Menu##############\n")
console.log("############### Opção 1 - Cor fria ##############\n")
console.log("############### Opção 2 - Cor quente ##############\n")
let opcao = readLine.questionInt("Digite a opcao:  ")

switch (opcao) {
    case 1:
        console.log("Cor Fria");
        break;
    case 2:
        console.log("Cor Quente");
        break;
    default:
        console.log("Opção invalida!!!.")
        break;
}