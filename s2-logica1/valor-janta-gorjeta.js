/* Programa ler o valor de um jantar, calcula e informa o valor da taxa 
do garçom (10%) e o valor total a ser pago. */


// Serão atribuídos valores com fins educativos e de conferência do código
let valorj
let taxag = 10/100

//atribuições
valorj = 120

//fórmulas relacionando variáveis criadas
const vtaxag = valorj * taxag
const valortotal = valorj + vtaxag

//Exibição no console
console.log(`Valor da taxa do garçom: R$ ${vtaxag} reais.` )
console.log(`Valor total a ser pago: R$ ${valortotal} reais.`)
