/*
Crie um classe para representar pessoas. Para cada pesso teremos os atributos, peso e altura. As pessoas devem ter a capcidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
- instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc(){
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(){
        const imc = this.calculaImc();

        if (imc < 18.5) {
           return 'Abaixo do peso';
        } else if (imc < 25) {
           return 'Peso normal';
        } else if (imc < 30) {
           return 'Acima do peso';
        } else if (imc < 40) {
           return 'obeso';
        } else {
           return 'Obesidade Grave';
        }
    }
}

(function(){
    const jose = new Pessoa('Jóse', 70, 1.75);

    console.log(`O ${jose.nome} tem o IMC de: ${jose.calculaImc().toFixed(2)} = ${jose.classificarImc()};`)
})();
