/*
Faça um programa que receba a média de um aluno. Caso a média seja < 5, imprima "Reprovado". Caso a média seja >= 5 e < 7, imprima "Recuperação". Caso a média seja >= 7, imprima "Aprovado".

Exemplo:

Entrada: 5.5

Saída: Recuperação
*/

const {gets, print} = require('./funcoesAuxiliaresMedia2');

const media = gets();

if (media < 5){
    print('Reprovado' + media);
}else if (media < 7){
    print('Recuperação' + media);
}else{
    print('Aprovado' + media);
}