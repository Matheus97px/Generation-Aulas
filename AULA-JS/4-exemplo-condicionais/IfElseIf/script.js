const readLine = require("readline-sync");

let nota = readLine.questionFloat("Digite sua nota  : ");

if (nota >= 90){
    console.log("Conceito A");
}else if(nota >= 80) {
    console.log("Conceito B");
}else if(nota >= 70) {
    console.log("Conceito C");
}else {
    console.log("Conceito D");
}