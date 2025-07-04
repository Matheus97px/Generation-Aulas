"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLine = require("readline-sync");
var list = new Set();
var opcao;
do {
    opcao = readLine.questionInt("\n    Digite 1 para cadastrar\n    Digite 2 para deletar\n    Digite 3 para imprimir\n    Digite 4 para sair\n    ");
    switch (opcao) {
        case 1:
            console.log("Coloque um numero na lista");
            list.add(readLine.questionInt());
            break;
        case 2:
            console.log("Digite o numero na lista que queira deletar");
            list.delete(readLine.questionInt());
            break;
        case 3:
            console.table(list);
            break;
    }
} while (opcao !== 4);
{
}
