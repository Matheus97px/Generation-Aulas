import  readLine = require("readline-sync");
import { Queue } from "./script";
import { Stack } from "../03-stackMetodos/script";

const fila = new Queue<string>();
let continua: string = '';


do {
    console.log(`
            Fila de Atendimento
        Digite 1 cadastrar paciente
        Digite 2 finalizar atendimento
        Digite 3 ver lista de usuario
    `);

        let opcao = readLine.questionInt(`-> `)

    switch (opcao) {
        case 1:
            fila.enqueue(readLine.question(`Nome: `));
            break;
        case 2:
            fila.dequeue();
            console.log(`Volte Sempre`);
            break;
        case 3:
            console.log(`Fila de atendimento`)
            fila.printQueue();
            break;
        default:
            break;
    }
    continua = readLine.question(`Digite (s) para continuar: `).toLowerCase();

} while (continua === 's'); 