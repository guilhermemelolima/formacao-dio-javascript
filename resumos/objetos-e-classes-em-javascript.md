## Entendendo Objetos

O objeto é uma coleção de valores(atributos), assim ele é uma coleção dinamica de chave e valor, essa dinamicidade permite adicionar e remover valores
```javascript
const objeto = {
    nome: 'Vitor Guerra',
    idade: 25
};

console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto);

objeto.altura = 1.69;
console.log(objeto)

delete objeto.nome;
console.log(objeto);
```

### Criando métodos para objetos

Quando criamos uma função para um objeto ela se torna um método
```javascript
const pessoa = {
    nome: 'Vitor Guerra',
    idade: 25,

    //this é uma referência ao próprio objeto
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.descrever();

pessoa.nome = 'Renan';
pessoa.idade = 30;
pessoa.descrever();

const paulo = new Pessoa('Paulo', 49).descrever();

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}
pessoa.descrever();

// Outra forma de acessar os atributos é de foma dinamica

const atributo = 'idade';
console.log(pessoa[atributo]);

console.log(pessoa['nome']);

pessoa['nome'] = 'outro nome';
console.log(pessoa.nome);
```

### Criando classes e Instâncias

Na situação de precisarmos de mais de um objeto precisamos utilizar de classes que define um modelo/tipo de algo e que possuo caracteristicas/atributos préestabelecidas.

```javascript
class Pessoa {

    //atributos
    nome;
    idade;

    // dentro de um classe não é preciso escrever function
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa();
console.log(vitor);

vitor.nome = 'Vitor Guerra';
vitor.idade = 25;
console.log(vitor);

const renan = new Pessoa();
renan.nome = 'Renan Paula';
renan.idade = 25;
console.log(renan);

vitor.descrever();
renan.descrever();
```

Ao instanciar uma pessoa podemos fazer isso com um construtor que ira dizer o que acontecera com a pessoa ao ser instânciado, ao usar um construtor ele obriga que seja informado o valor dos atributos.
```javascript
class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade,){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    // dentro de um classe não é preciso escrever function
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('vitor',25);
vitor.descrever()

```

Exemplo:
```javascript
class Pessoa {
    nome;
    idade;

    constructor(nome, idade,){
        this.nome = nome;
        this.idade = idade;
    }
}

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor',25);
const renan = new Pessoa('Renan',27);

compararPessoas(vitor, renan);
```

### Exercício 1

Crie uma classe para representar carros. Os carros possuem um amarca, uma cor e um gasto médio de combustível por Kilômetro rodado. Crie um método que dado a quantidade de quilometro e o preço do combustiveível nos dê o valor gasto em reais para realizar este percurso.

Resolução: [exerc1.js](../codes/fundamentos/classeCarro.js)

### Exercício 

Crie um classe para representar pessoas. Para cada pesso teremos os atributos, peso e altura. As pessoas devem ter a capcidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
- instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

Resolução: [exerc2.js](../codes/fundamentos/classePessoa.js)

