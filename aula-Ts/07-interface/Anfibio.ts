import { Automovel } from "./Automovel";
import { VeiculoAquatico } from "./VeiculoAquatico";

export class Anfibio extends Automovel implements VeiculoAquatico{
    navegar(): void {
        console.log("Navegando");
    }

    
}