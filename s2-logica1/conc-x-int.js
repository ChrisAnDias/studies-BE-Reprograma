//Criação de variaveis usando let, const, atribuição de strings e concatenação e interpolação.

let nome //posso atribuir uma variável sem valor. E lá na frente chamar a variável e com o símbolo de igual ' = '
//atribuir-lhe o valor desejado
//usando let significa que a variável pode mudar no decorrer do código
nome = 'Débora'

const idade = '30 anos' //usando const significa que a variável não mudará no decorrer do código

//Concatenando
console.log('olá ' + nome +' ' + idade)

//Interpolando
console.log(`Holá ${nome, idade}`)

console.log(typeof idade)