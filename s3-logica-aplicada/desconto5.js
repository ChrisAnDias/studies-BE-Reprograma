//Função que calcula 5% de desconto retornando o valor do desconto.

function desconto5(valor) {
    const desc5 = 5 / 100
    let valordes = valor * desc5
    return `O valor de desconto é de ${valordes} reais. `
}

console.log(desconto5(100))