const readLine = require('readline-sync');

let idade = readLine.questionInt("digite sua idade  :");

if(idade >= 18) {
    console.log("Voce é maior de idade.");
}else {
    console.log("Voce é menor de idade")
}