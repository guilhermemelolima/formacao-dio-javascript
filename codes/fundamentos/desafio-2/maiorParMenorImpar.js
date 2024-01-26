
/*
Faça um programa que receba N (quantidade de números) e seus respectivos valores, imprima o maior número par e o menor número ímpar.

Entradas: [5, 3, 4, 1, 10, 8]

Saída:
- Maior par: 10
- Menor ímpar: 1
*/
const { gets, print } = require('./funcoesAuxiliaresMedia2');

const n = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorPar == null || numero > maiorPar) {
            maiorPar = numero
        }
    } else {
        if (menorImpar == null || numero < menorImpar) {
            menorImpar = numero
        }
    }

}

print(`O maior valor par é: ${maiorPar}`);
print(`O menor valor par é: ${menorImpar}`);