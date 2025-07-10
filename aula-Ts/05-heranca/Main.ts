import { Automovel } from "./Automovel";
import { VeiculoTerrestre } from "./VeiculoTerrestre";


export function main() {

    const carro = new Automovel("Gasolina", "Fiat", "Uno");
    const veiculo = new VeiculoTerrestre("Honda", "Civic");
    carro.marca = "VW";
    console.log(`ìnformações do carro:`);
    carro.visualizar();
    console.log(`informações do veiculo:`);
    veiculo.visualizar();
}

main();