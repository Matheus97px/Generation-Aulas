const readLine = require("readline-sync");


let querContinuar;
    console.log(`Voce esta jogando!!`);
    querContinuar = readLine.question("Quer continuar jogando pagando 500pilas? (s) ou (n)").toLocaleLowerCase();

do{
querContinuar = readLine.question("Quer continuar jogando pagando 500pilas? (s) ou (n)").toLocaleLowerCase();    
    if (querContinuar === 's') {
        console.clear();
        console.log(`Pagamento realizado. continuando o jogo...`);
        
    }

} while (querContinuar !== 'n') 
console.clear()
console.log(`Voce saiu do jogo!!`)