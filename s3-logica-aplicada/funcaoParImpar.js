//Função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parImpar(num) {
    if (num % 2 === 0) {
        return `O número ${num} é par!`
    } else {
        return `O número ${num} é ímpar!`
    }
}

//Teste de funcionamento
let result = parImpar(1785)
console.log(result)