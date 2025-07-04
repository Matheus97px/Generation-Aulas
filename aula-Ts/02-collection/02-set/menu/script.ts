import readLine = require('readline-sync');

const list: Set<number> = new Set<number>();
let opcao: number;


do{
opcao = readLine.questionInt(`
    Digite 1 para cadastrar
    Digite 2 para deletar
    Digite 3 para imprimir
    Digite 4 para sair
    `);

switch (opcao) {
    case 1:
        console.log(`Coloque um numero na lista`);
        list.add(readLine.questionInt());
        break;
    case 2:
        console.log(`Digite o numero na lista que queira deletar`);
        list.delete(readLine.questionInt());
        break;
    case 3:
        console.table(list);
        break;
}
} while (opcao !== 4) {

}