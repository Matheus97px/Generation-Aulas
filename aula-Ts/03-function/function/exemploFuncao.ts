// funcoes que retornam um valor

export function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

export function somar2(numero1: number, numero2: number): void {
    console.log(`Resultado da soma: ${(numero1 + numero2)}`);
}

export function mostrarIdadeOuNome(valor: number | string): void {
    if(typeof valor === "number"){
        console.log(`Idade: ${valor} anos`);
    }else {
        console.log(`Nome: ${valor}`);
    }

    console.log(typeof valor === "number" ? `Idade: ${valor} anos` : `Nome: ${valor}`);
}

export function dobraOuSomar(valor: number, adicional?: number): number {
     if (adicional !== undefined) {
    return valor + adicional;
  } else {
    return valor * 2;
  }
}