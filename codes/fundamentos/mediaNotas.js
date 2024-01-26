/* 
Fça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média meno que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média maior que 5, aprovado;

*/

// SEM FUNÇÃO
/*
    const nota1 = 7;
    const nota2 = 7;
    const nota3 = 7;

    const media = (nota1 + nota2 + nota3) / 3;

    if (media < 5) {
        console.log(media.toFixed(1) + ': Reprovado');
    } else if (5 <= media && media >= 7) {
        console.log(media.toFixed(1) + ': Recuperação');
    } else {
        console.log(media.toFixed(1) + ': Aprovado');
    }
*/

// COM FUNÇÃO
function calculaMedia(nota1, nota2, nota3) {
    return media = (nota1 + nota2 + nota3) / 3;
}

function retornaSituação(media) {
    if (media < 5) {
        console.log(media.toFixed(1) + ': Reprovado');
    } else if (5 <= media && media >= 7) {
        console.log(media.toFixed(1) + ': Recuperação');
    } else {
        console.log(media.toFixed(1) + ': Aprovado');
    }
}

function main() {
    const nota1 = 7;
    const nota2 = 7;
    const nota3 = 7;

    retornaSituação(calculaMedia(nota1, nota2, nota3));
}

main();