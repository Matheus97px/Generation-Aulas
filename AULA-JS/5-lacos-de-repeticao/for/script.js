
// for (let i = 0; i <=10; i++){
//     console.log(`numero: ${i}`);
// }

// for (let x = 10; x >= 0; x--) {
//     console.log(`numero: ${x}`) 
// }

const readLine = require("readline-sync");

let bomba = readLine.question("Nao digite (s): ");
if (bomba === "s") {
    for (let i = 10; i >= 0; i--) {
        setTimeout(() => {
            if (i == 2) {
                console.log(`Contagem: ${i} vai restar 6 das 7 vidas! `);
            } else if (i > 0) {
                console.log(`Contagem: ${i}`);
            } else {
                console.log(`BOOM!!!!!!`);
            }
        }, (10 - i) * 1000); //espera 1 segundo por numero
    }
} else {
    console.log(`Porque nao ser curioso voce se manteve vivo!!`)
}