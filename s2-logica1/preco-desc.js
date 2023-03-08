//Programa solicita o preço de uma mercadoria e o percentual de desconto 20%. 
//Exibe no console o valor do desconto e o preço a pagar.

// Serão atribuídos valores com fins educativos e de conferência do código
let preco
let desconto

//atribuições
preco = 100
desconto = 20/100

//fórmulas relacionando variáveis criadas
let valordesc = preco * desconto
let precopagar = preco - valordesc

//Exibição no console
console.log(`O valor do desconto é de ${valordesc} reais`)
console.log(`O preço a pagar é de ${precopagar} reais`)
