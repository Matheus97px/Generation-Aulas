// // let nome = "Matheus";



// // sem template string
// console.log("Ola, " + nome + "!");

// // Com template String
// console.log(`Ola, ${nome}!!`);

// console.log(`Ola, \n ${nome}!!`);
// console.log(`Ola, \t ${nome}!!`);
// console.log(`Ola, \'${nome}!!\'`);
// console.log(`Ola, "${nome}!!"`);

// console.log(`Ola, \\${nome}!!`);


const readLine = require("readline-sync");

//No processamento utilizamos os metodos(funcoes prontas como o readline-sync)
let nome = readLine.question("Digite seu nome: ");
let idade = readLine.questionInt("Digite sua idade: ");
let altura = readLine.questionFloat("Digite sua altura em metros: ")

//Saida
console.log(`\nOlá, ${nome}`)
console.log(`Voce tem ${idade} anos e ${altura}m de altura.`)