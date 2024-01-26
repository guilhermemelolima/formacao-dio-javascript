/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios. O salário a ser transferido é calculado da seguinte maneira:

Valor bruto do salário - percentual de impostos mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto, seguem as alíquotas:

- De R$ 0.00 a R$ 1100.00 = 5.00%
- De R$ 1100.01 a R$ 2500.00 = 10.00%
- Maior que R$ 2500.00 = 15.00%

Entrada: 2000 250

Saída: 250
*/

const { gets, print } = require('./funcoesAuxiliaresSalario');

const salarioBruto = gets();
const adicional = gets();

function calculaDesconto(salarioBruto, percentual){
    return salarioBruto * percentual;
}

function percentualSalario(salarioBruto){
    if (0.00 < salarioBruto && salarioBruto <= 1100.00){
        return 0.05
    }else if(1100.01 <= salarioBruto && salarioBruto <= 2500.00){
        return 0.10
    }else{
        return 0.15 
    }
}

const imposto = percentualSalario(salarioBruto)
const desconto = calculaDesconto(salarioBruto, imposto)

const salarioLiquido = salarioBruto + adicional - desconto

print(salarioLiquido)
