const readLine = require('readline-sync');

let idade = readLine.questionInt("Digite sua idade:  ")

if(idade < 5) {
    console.log("Entrada Gratis")
}else if(idade >= 5 && idade <=12 ) {
    console.log("Meia Entrada")
}else if(idade >= 13 && idade <=59 ) {
    console.log("Ingresso Normal")
}else {
    console.log("Meia Entrada para idosos")
}