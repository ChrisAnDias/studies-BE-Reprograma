/*Programa que pergunta a quantidade de km percorridos por um carro alugado
pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcula o preço a pagar, 
sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado. */

// Atribuindo valores com fins educativos e de conferência do código
let kmp
let diauso
const precocd = 60
const precokmr = 0.15

//atribuições
kmp = 100
diauso = 2

//fórmulas relacionando variáveis criadas
const precopag = (diauso * precocd) + (kmp * precokmr )

//Exibição no console
console.log(`Preço total a pagar pelo aluguel do carro: R$ ${precopag} reais.`)

