### Arrays / Listas 

Arrays são listas de informações que podem conter os mesmo tipos de dados ou não, um ponto inportante é que elas dividas em dois num endereço e num valor, o endereço aponta para um respectivo valor, os endereços de um vetor começa do zero e vão até a quantidade que for preciso armazenar.
```javascript
const aluno = ['joão', 'marcos', 'vitor'];
console.log(aluno); // acessa todos os alunos
console.log(aluno[0]); // acessa a primeira posição do vetor
console.log(aluno[1]); // acessa a segunda posição do vetor
console.log(aluno[2]); // acessa a terceira posição do vetor


aluno.push('carlos'); //adiciona no final da lista 
aluno[4] = 'vinícius'; //adiciona em uma determinada posição
aluno.push(10);

console.log(aluno);
console.log(aluno.pop()); // remove o ultimo elemento da lista
console.log(aluno.shift()); // remove o primeiro elemento da lista

console.log(aluno);

aluno.length // retorna o tamanho da lista
```

### Estrutura de repetição

São estruturas utilizadas para realizar loops e percorrer arrays
```javascript
const nota = [];

nota.push(8);
nota.push(9);
nota.push(6);
nota.push(7);
nota.push(6.5);

const soma = nota[0] + nota[1] + nota[2] + nota[3] + nota[4];

console.log(soma / nota.length)
```
Para melhorar este código podemos usar estruturas de repetição que vão tornar este código mais dinamico


Está estrutura realiza o loop n vezes enquanto a condição informada é atendida, o for é dividido em 3 áreas:

    for ( declaração da variavel de controle; considção; incremento ){
        // comandos
    }
- A primeira parte é constituida de uma variavel de controle que ira receber multiplos valores ao longo do loop;
- A segunda é condição ela determina o ponto de para, caso seja mal formulada pode gerar um loop infinito;
- A terceira é o incremento é nesta parte que a nossa variavel ira receber multiplos valores é aqui que iremos terminar o passo do nosso loop, podes fazer de três formas diferentes 'i = i + valor','i += valor','i++', nas duas primeiras opções podemos determinar o passo ou seja de quanto em quanto nossa variavel vai aumentar, no ultimo caso o valor é fixo sendo ele de 1 em 1.

```javascript

// podemos com o for percorrer uma string pois elas são listas de caracteres
const nome = 'Guilherme Melo de Lima';
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);    
}

//===========
const nota = [];

nota.push(8);
nota.push(9);
nota.push(6);
nota.push(7);
nota.push(6.5);

let soma = 0
for (let i = 0; i < nota.length; i++) {
    soma += nota[i];
}

const media = soma / nota.length

console.log(media)
```

### Exercício 1

Crie um programa que dado um número imprima sua tabuada

Resolução: [tabuada.js](../codes/tabuada.js)

### Exercício 2

Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

Resolução: [isPar.js](../codes/isPar.js)