//Função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, Diga se esse numero é par ou ímpar.

function statusResultado(num1, num2) {
    let div = num1 / num2
    if (div % 2 == 0){
        return `O resultado da divisão é ${div} e é par.`
    } else {
        return `O resultado da divisão é ${div} e é ímpar.`
    }
}
//Teste de funcionamento
let result = statusResultado(10, 2)
console.log(result)