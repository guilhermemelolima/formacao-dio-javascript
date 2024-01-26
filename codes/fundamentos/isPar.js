
/*

Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
*/

function isPar(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            console.log(lista[i]);
        }
    }
}

const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] ;

isPar(lista)