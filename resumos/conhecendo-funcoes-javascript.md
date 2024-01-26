## Sobre Funções

***Ao nomear funções é importante que o nome seja escrito com um verbo como 'escreva', 'imprima', 'calcule'***

São trechos de código que podem ser executados a qualquer momento quando chamados:
```javascript
    function nomeDaFunção(Parametros){
        // comandos
    }

    //======
    // funções que não tem nenhum retorno são chamadas de procedimetos.
    function sayMyName(nome){
        console.log('Seu nome é ' + nome);
    }
    sayMyName('Guilherme');

    //======

    function quadrado(valor){
        return valor * valor;
    }
    console.log(quadrado(5));

    //======
    function incrementarJuros(valor, percentualJuros){
        const valorDeAcrecimo = (percentualJuros / 100) * valor
        return valor + valorDeAcrescimo
    }
    console.log(incrementarJuros(100,10))
```

Para melhor organizar os scripts, criaremos funções para as execuções, além de criar uma função main (função principal):


```javascript
function main(){
    //comandos
}
main()

//======

//Forma de utilizar e organizar um código com função
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
```

Funções no JavaScript também são valores/objetos, assim podemos atribuir uma função a uma variável e até mesmo usar uma função como parâmetro de outra função:
```javascript
function main(){
    //comandos
}

main = function(){
    //novos comandos
}

//=======
//Uma coisa que o JavaScript permite é fazer com que as funções sejam imediatamente invocadas, e elas não precisam ser nomeadas. Ao realizar isso, ela só existirá dentro dos parênteses. Esse tipo de função é usada no desenvolvimento web quando uma função precisa ser executada apenas uma vez.


(function () {
    //comandos
})();
```

### Exercício 1

Escreva uma função que imprima seu nome

Resolução: [funcaoEscrevaNome.js](../codes/fundamentos/funcaoEscrevaNome.js)

### Exercício 2

Escreva uma função que receba uma idade e valide se é maior de idade ou não

Resolução: [funcaoValidaIdade.js](../codes/fundamentos/funcaoValidaIdade.js)

### Exercício 3

Reescreva as atividades anteriores para que elas utilizem função

Resolução:
- [imc.js](../codes/fundamentos/imc.js)
- [mediaNotas.js](../codes/fundamentos/mediaNotas.js)
- [valorPagoEmProduto.js](../codes/fundamentos/valorPagoEmProduto.js)
- [valorViagem.js](../codes/fundamentos/valorViagem.js)
- [valorViagem2.js](../codes/fundamentos/valorViagem2.js)