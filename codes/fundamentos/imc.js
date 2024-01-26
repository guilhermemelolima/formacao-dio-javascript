/*
    O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos COndição:
    - Abaixo de 18.5 Abaixo do peso;
    - ENtre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave.
*/

// SEM FUNÇÃO
/*
const altura = 1.75;
const peso = 80;

// const imc = peso / Math.pow(altura,2);
const imc = peso / (altura * altura);
console.log('IMC: ' + imc.toFixed(2))

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc < 25) {
    console.log('Peso normal');
} else if (imc < 30) {
    console.log('Acima do peso');
} else if (imc < 40) {
    console.log('obeso');
} else {
    console.log('Obesidade Grave');
}
*/

// COM FUNÇÃO
function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
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

function main(){
    const altura = 1.75;
    const peso = 80;

    const imc = calcularImc(peso, altura) ;
    console.log('IMC: '+ imc + ', classificação: ', classificarImc(imc));    
}

main();