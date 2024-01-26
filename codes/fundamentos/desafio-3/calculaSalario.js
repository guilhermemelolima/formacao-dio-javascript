/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Pra realizar o calculo receba o valor bruto do salário e o adicional dos benefícios. O salário a ser transferido é calculado da seguinte maneira:

valor bruto do salário - percentual de impostos mediante a faixa salarial + adicional dos benefícios

para calcular o percentual de imporo segue as aliquotas:

- de R$ 0.00 a R$ 1100.00 = 5.00%
- de R$ 1100.01 a R$ 2500.00 = 10.00%
- maior que R$ 2500.01 = 15.00%

entrada: 2000 250
saida: 2050
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
