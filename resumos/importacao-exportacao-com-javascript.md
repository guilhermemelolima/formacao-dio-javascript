## Importação / Exportação

Para fazer a importação de funções de outro arquivo e exportação para outros arquivos demandamos de realizar um processo onde iremos no arquivo que contem as funções devemos declarar as funções que serão exportadas para tal utilizaremos o module.exports, agora no arquivo que vai importar as fuções precisamos dizer qual arquivo estão as funções que serão importadas

```javascript
// em um arquivo colocaremos o nome de funcoesAuxiliares.js
function gets(){
    return 10;
}

function print(texto){
    console.log(texto)
}

// informamos as variáveis que serão exportadas
module.exports = { gets, print };

```

```javascript
// referenciamos o arquivo de origem das funções que desejamos importar.
// ! para funcionar precisamos por o ./ o que significa que os arquivos estão na mesma pasta, caso eles estivesem em pastas diferentes deveriasmo utilizar o ../ para voltar um diretorio e entrar no correto.
const funcoes = require('./funcoesAuxiliares.js');
console.log(funcoes);
```

## Object destructuring

É basicamente  uma desestruturação do objeto instanciado, está é uma forma de extrair valores de um objeto a atribuilos a variáveis separadas

```javascript
const pessoa = {
    nome: 'Vitor',
    idade: 25,
    cidade: 'ExemploCity'
};

const { nome, idade, cidade } = pessoa;

console.log(nome);   
console.log(idade);  
console.log(cidade); 
//A desestruturação de objetos permite criar uma variável nome diretamente a partir da propriedade nome do objeto pessoa.

//=====

const {gets, print} = require('./funcoesAuxiliares.js');

```

### Exercício 1

Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100. Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Entrada: [5, 50, 10, 98, 23]
Saida: [98]

Resolução: [numeroSorteado.js](../codes/fundamentos/numeroSorteado.js)
