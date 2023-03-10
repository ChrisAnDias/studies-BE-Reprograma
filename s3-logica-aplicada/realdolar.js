//Função que irá converter uma quantia de real para dolar utilizando a cotação do dia.
//Cotação do dólar no dia: 4,69 de real

function realdolar(real) {
    const dolar = 4.69
    let convdolar = real / dolar
    return `Convertendo ${real} reais para dólar, você tem: $ ${convdolar.toFixed(2)} de dolar`
}

//Teste funcionamento
console.log(realdolar(100))