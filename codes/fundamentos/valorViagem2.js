/*
    Faça um programa para calcular o valor de uma viagem. Você terá 35variáveis. Sendo elas:

    - Preço da gasikina;
    - Preço do etanol;
    - Tipo de combustível que está no carro;
    - Gastos médio de combustivel do carro por KM;
    - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

// SEM FUNÇÃO
/*
    const precoGasolina = 6.66;
    const precoEtanol = 5.79;
    const kmPorLitros = 10;
    const distaciaKm = 100;
    const tipoCombustivel = 'ETANOL';

    const litrosConsumidos = distaciaKm / kmPorLitros;

    if (tipoCombustivel === 'ETANOL') {
        const gasto = litrosConsumidos * precoEtanol;
        console.log(gasto.toFixed(2));
    } else {
        const gasto = litrosConsumidos * precoGasolina;
        console.log(gasto.toFixed(2));
    }
*/

//COM FUNÇÃO
function calculaLitrosConsumidos(distanciakm, kmPorLitros) {
    return distanciakm / kmPorLitros;
}

function calculaGasto(litrosConsumidos, tipoCombustivel) {
    const precoGasolina = 6.66;
    const precoEtanol = 5.79;
    if (tipoCombustivel === 'ETANOL') {
        const gasto = litrosConsumidos * precoEtanol;
        console.log(gasto.toFixed(2));
    } else {
        const gasto = litrosConsumidos * precoGasolina;
        console.log(gasto.toFixed(2));
    }
}

function main() {
    
    const kmPorLitros = 10;
    const distanciakm = 100;
    const tipoCombustivel = 'ETANOL';
    
    const consumo = calculaLitrosConsumidos(distanciakm,kmPorLitros);
    calculaGasto(consumo,tipoCombustivel);
}

main();
