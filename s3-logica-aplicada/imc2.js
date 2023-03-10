// Função que calcula o IMC de uma pessoa, dado a altura em metros (m) e a massa em kg

//Método function
function imc(altura, massa) {
    let valorImc = (massa) / (altura * altura)
    return `Seu IMC corresponde à ${valorImc.toFixed(2)}`
}
// Teste de funcionamento
console.log(imc(1.7, 60))

//F do tofixed() tem que ser maiúsculo.