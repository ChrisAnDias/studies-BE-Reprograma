/* Programa que funcionará como um sinal de transito.*/

// Usando método criando função para resolver
// Criação da função
function semaforo(cor) {
    if (cor === 'vermelho') {
        return 'Pare!'
    } else if (cor === 'amarelo') {
        return 'Atenção'
    } else if (cor === 'verde') {
        return 'Livre'
    }
}
//Teste funcionamento. 
console.log(semaforo('verde'))

// Usando método if|else para resolver

//Teste funcionamento. Pode ser colocado antes ou depois do método escolhido para a resolução
// const cor = 'amarelo'

// Método if|else
// if (cor == 'vermelho') {
//   console.log('pare')
// } else if (cor == 'amarelo') {
//   console.log('atenção')
// } else if (cor == 'verde') {
//   console.log('siga')
// } else {
//   console.log('não tem essa cor')
// }
