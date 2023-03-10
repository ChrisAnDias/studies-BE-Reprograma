//Função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function menorMaiorIdade(anonascimento) {
    let anoAtual = 2022
    let idade = anoAtual - anonascimento
    if (idade >= 18) {
        return ` A pessoa tem ${idade} anos e é maior de idade.`
    } else {
        return ` A pessoa tem ${idade} anos e é menor de idade.`
    }
}
//Teste de funcionamento
let result = menorMaiorIdade(2008)
console.log(result)