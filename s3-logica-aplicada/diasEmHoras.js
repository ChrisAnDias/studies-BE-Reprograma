//Algoritmo que converte dias em horas, quando recebe um número de dias.
// Dado que 1 dia tem 24 horas

//Utilizando função
function diasEmHoras(dias){
    let converte = dias * 24
    return `${dias} em horas corresponde à ${converte}`
}

//Teste de funcionamento
let result = diasEmHoras(20)
console.log(result)
