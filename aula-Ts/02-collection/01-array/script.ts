import readLine = require('readline-sync');

const list: Array<number> = new Array<number>();

console.log(`Coloque 10 numeros na lista `);

for (let i = 0; i < 10; i++) {
    list.push(readLine.questionInt("digita ai:"));
    
}


console.log(list);
console.table(list);

list.reverse();
console.table(list);

list.forEach ((n) => console.log(n));