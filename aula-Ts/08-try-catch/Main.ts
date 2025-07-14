import readLine = require("readline-sync");
import { CartaoCredito } from "./src/model/CartaoCredito";
import { Pix } from "./src/model/Pix";
import { PagController } from "./src/controller/PagController";


function main() {
    const cartao = new CartaoCredito(100);
    const pix = new Pix(50);

    let controller: PagController;
    let continuar = 's';
    while (continuar === 's') {
        try {

            console.log("\n=== Sistema de Pagamento ===");
            const opcao = readLine.question("Escolha o método (1 - Cartão | 2 - Pix): ");
            const valor = readLine.questionFloat("Digite o valor a pagar: R$ ");

            if (opcao === "1") {
                controller = new PagController(cartao);
            } else if (opcao === "2") {
                controller = new PagController(pix);
            } else {
                console.log("❌ Opção inválida.");
                continue; // volta ao início do loop
            }

            controller.exibirSaldo();
            controller.realizarPagamento(valor);
            controller.exibirSaldo();

        } catch (erro: unknown) {
            if (erro instanceof Error) {
                console.log(`Erro: ${erro.message}`);
            } else {
                console.log(`Erro desconhecido.`)
            }
        }

    }



}

main();