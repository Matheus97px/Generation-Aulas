const readLine = require("readline-sync")
 
let querContinuar = readLine.question("Quer jogar pagando R$500,00 (s) :").toLocaleLowerCase();

while (querContinuar === "s") {
    console.log(`Voce esta jogando!!`);

    querContinuar = readLine.question("Quer jogar pagando R$500,00 (s) :").toLocaleLowerCase();

    if (querContinuar === "s") {
        console.clear()
        console.log(` Pagamento feito. continuando o jogo....`)
    }else {
        console.clear()
        console.log(`Game Over`)
    }
}