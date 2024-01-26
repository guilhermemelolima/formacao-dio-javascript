/*
    Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado. Crie um método que dado a quantidade de quilometro e o preço do combustiveível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioDeCombustivel;

    constructor(marca, cor, gastoMedioDeCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioDeCombustivel = gastoMedioDeCombustivel;
    }

    calculaGastoPercurso(quantidadeKm, precoCombustivel) {
        return quantidadeKm * this.gastoMedioDeCombustivel * precoCombustivel;
    }
}

(function () {
    const carro = new Carro('Ford', 'Lilas', 1 / 12);

    console.log(`O carro ${carro.cor} da marca ${carro.marca} gastar: R$${carro.calculaGastoPercurso(100, 5.99).toFixed(2)} neste percurso.`);

})();
