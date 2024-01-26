/*
    Faça um programa para calcular o valor de uma viagem. Você terá 3 variáveis. Sendo elas:

    - Preço do combustível;
    - Gastos médio de combustivel do carro por KM;
    - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

// SEM FUNÇÃO
/*
    const precoCombustivel = 5.99;
    const kmPorLitros = 15;
    const distaciaKm = 180;

    const gasto = (distaciaKm / kmPorLitros) * precoCombustivel;

    console.log(gasto.toFixed(2));

    // ? toFixed → limita a quantidade de casas decimais, retorna uma string
*/

function calculaGasto(distanciaKm, kmPorLitros, precoCombustivel) {
    return (distanciaKm / kmPorLitros) * precoCombustivel;
}

function main() {
    const precoCombustivel = 5.99;
    const kmPorLitros = 15;
    const distanciaKm = 180;
    
    const gasto = calculaGasto(distanciaKm, kmPorLitros, precoCombustivel);
    
    console.log(gasto.toFixed(2));
}

main();