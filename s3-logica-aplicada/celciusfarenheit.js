//Função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function convertemp(celcius) {
    let tempfaren = (1.8 * celcius) + 32
    return tempfaren
}

//Teste de funcionamento
console.log(convertemp(50))