## Declarar variáveis

###### Para imprimir algo no terminal usamos o comando "console.log('texto');"

Variáveis são espaços na memória usados para armazenar um valor de um determinado tipo. Existem duas principais formas de declarar variáveis:

- let:

```javascript
let variavel = 10;
console.log(variavel);

variavel = 20;
console.log(variavel);
```

- const:

```javascript
const pi = 3.14;
console.log(pi);

pi = 3;
console.log(pi);
```
Variáveis let e const apenas existem dentro de seus respectivos blocos de código, portanto, se forem chamadas em outro bloco de código, não serão executadas. A diferença fundamental entre as duas é que as variáveis do tipo let podem ter seus valores alterados, já as variáveis const não podem ter seus valores alterados. 


### Operadores

**= → Operador de atribuição de valor**

**\+ → Operador de soma**

```javascript
const variavel = 10 + 5;
```

**\- → Operador de subtração**

```javascript
const variavel = 10 - 5;
```

**\* → Operador de multiplicação**

```javascript
const variavel = 10 * 5;
```

**/ → Operador de divisão**

```javascript
const variavel = 10 / 5;
```

### Exercício 1

Faça um programa para calcular o valor de uma viagem. Você terá 3 variáveis. Sendo elas:

- Preço do combustível;
- Gastos médio de combustivel do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

Resolução: [exerc1.js](../codes/fundamentos/valorViagem.js)

## Estruturas Condicionais

"As estruturas condicionais verificam se um cenário é verdadeiro ou falso e, de acordo com o resultado, executam uma ação específica.

Operadores consdicionais

**\> → Maior que**

```javascript
const a = 10;
const b = 2;

console.log(a > b);
```

**< → Menor que**

```javascript
const a = 10;
const b = 20;

console.log(a < b);
```

**\>= → Maior ou igual a**

```javascript
const a = 4;
const b = 6;

console.log(a >= b);
```

**<== → Menor ou igual a**

```javascript
const a = 10;
const b = 2;

console.log(a > b);
```

**\== → Igual a**

```javascript
const a = 10;
const b = 10;

// Verifica se as variáveis são iguais em valor 
console.log(a == b);
```

**!= → Diferente de**

```javascript
const a = 8;
const b = 2;

console.log(a != b);
```

**\=== → Idêntico a**

```javascript
const a = 2;
const b = '2';

// Verifica se as variáveis são iguais em valor e em tipo
console.log(a === b);
```

**!== → Não idêntico a**

```javascript
const a = 2;
const b = '2';

console.log(a !== b);
```

**Variáveis boolean - representam valores true(verdadeiro) e false(falso)**

```javascript
const variavel = true;
const variavel = false;
```

**% → módulo - retorna resto da divisão**

```javascript
const numero = 36;

const isNumeroPar = (numero % 2) === 0;

console.log(isNumeroPar);
```

### If, Else e Else if

**If → é uma estrutura condicional simples que demanda uma condição e acordo com a condição construida no if ele pode ou não tomar uma determinada ação**

```javascript

const numero = 36;

const isNumeroPar = (numero % 2) === 0;

if(isNumeroPar){
    console.log('Par');
}
// ! inverte  o valor boolean
if(!isNumeroPar){
    console.log('Impar');
}
```

**If e Else → é uma estrutura condicional composta que Adiciona o bloco else que execulta uma determinada ação quando a condição do if não é atendida.**

```javascript

const numero = 36;

const isNumeroPar = (numero % 2) === 0;

if(isNumeroPar){
    console.log('Par');
}else{
    console.log('Impar');
}
```

**If e Else if → é uma estrutura condicional encadeada que adicionar mais condições alem da declarada no if**

```javascript

const numero = 36;

const isNumeroPar = (numero % 2) === 0;

if(isNumeroPar){
    console.log('Par');
}else if(!isNumeroPar){
    console.log('Impar');
}
```

### Operadores lógicos

**&& → retorna verdadeiro caso as duas condições sejam verdadeiras**

```javascript
if (condicao1 && condicao2) {
    // comandos
}

```

**|| → retorna verdadeiro caso uma duas condições sejam verdadeiras**

```javascript
if (condicao1 || condicao2) {
    // comandos
}

```

**! → inverte o valor lógico**

```javascript
if (!condicao) {
    // comandos
}

```

Além desses operadores, você pode combinar várias expressões lógicas para criar condições mais complexas. Por exemplo:

```javascript
if (!(condicao1 && condicao2) || condicao3) {
    // condição
}
```

### Exercício 2

Faça um programa para calcular o valor de uma viagem. Você terá 5 variáveis. Sendo elas:

- Preço da gasikina;
- Preço do etanol;
- Tipo de combustível que está no carro;
- Gastos médio de combustivel do carro por KM;
- Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

Resolução: [exerc2.js](../codes/fundamentos/valorViagem2.js)

### Exercício 3

Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média meno que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média maior que 5, aprovado;

Resolução: [exerc3.js](../codes/fundamentos/mediaNotas.js)

### Exercício 4

O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos COndição:
- Abaixo de 18.5 Abaixo do peso;
- EnNtre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave.

Resolução: [exerc4.js](../codes/fundamentos/mediaNotas.js)

### Exercício 5

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetura p cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem jutos;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

Resolução: [exerc5.js](../codes/fundamentos/valorPagoEmProduto.js)
