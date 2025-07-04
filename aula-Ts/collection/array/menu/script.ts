import readLine = require('readline-sync');

const list: Array<number> = new Array<number>(12,75);
let opcao: number;

opcao = readLine.questionInt(`
    Digite 1 para cadastrar
    Digite 2 para deletar
    `);

switch (opcao) {
    case 1:
        console.log(`Coloque um numero na lista`);
        list.push(readLine.questionInt());
        break;
    case 2:
        console.log(`Deletado`);
        list.pop();
        break;
    case 3:
        console.table(list);
        break;
}