/*
 Crie um programa que dado um número imprima sua tabuada
*/

function tabuada(numero) {
    for (let i = 0; i < 11; i++) {
        console.log(`${numero} X ${i} = ${i * numero}`)
    }
}

tabuada(5);