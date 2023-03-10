//Função que determina se um número é par ou impar.

function parimpar(num) {
    if (num % 2 == 0) {
        return ` ${num} é par`
    } else {
        return ` ${num} é ímpar`
    }
}

//Teste de funcionamento
console.log(parimpar(6))