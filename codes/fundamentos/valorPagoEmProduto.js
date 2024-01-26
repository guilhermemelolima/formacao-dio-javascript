/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetura p cálculo adequado.

    Código condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou pix, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem jutos;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

// SEM FUNÇÃO
/*
    const valorPorduto = 100;

    const FormaDePagamento = 2;

    if (FormaDePagamento === 1) {
        console.log(valorPorduto - (valorPorduto * 0.1));
    } else if (FormaDePagamento === 2 || FormaDePagamento === 2) {
        console.log(valorPorduto - (valorPorduto * 0.15));
    } else if (FormaDePagamento === 3) {
        console.log(valorPorduto);
    } else if (FormaDePagamento === 4){
        console.log(valorPorduto + (valorPorduto * 0.1))
    }
*/

// COM FUNÇÃO
function aplicaDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicaJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

function main() {
    const valorPorduto = 100;
    const FormaDePagamento = 2;

    if (FormaDePagamento === 1) {
        console.log('Débito: ')
        console.log( aplicaDesconto(valorPorduto , 10));
    } else if (FormaDePagamento === 2 || FormaDePagamento === 2) {
        console.log('Dinheiro/Pix: ')
        console.log(aplicaDesconto(valorPorduto , 15));
    } else if (FormaDePagamento === 3) {
        console.log('até x2: ')
        console.log(valorPorduto);
    } else if (FormaDePagamento === 4) {
        console.log('Mais de x2: ')
        console.log(aplicaJuros(valorPorduto , 10))
    }
}

main();
