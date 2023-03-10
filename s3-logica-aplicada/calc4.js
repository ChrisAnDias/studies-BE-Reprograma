//Calculadora com as 4 operações matemáticas básicas

function calc4(operacao, num1, num2) {
    if (operacao === 'soma') {
        let resultsoma = num1 + num2
        return `O resultado da soma é ${resultsoma}`
    } else if (operacao === 'subtração') {
        let resultasub = num1 - num2
        return `O resultado da subtração é ${resultasub}`
    } else if (operacao === 'multiplicação') {
        let resultmult = num1 * num2
        return `O resultado da multiplicação é ${resultmult}`
    } else if (operacao === 'divisão') {
        let resultdiv = num1 / num2
        return `O resultado da divisão é ${resultdiv}`
    } else {
        return `${operacao} não é válido.`
    }
}

//Teste de funcionamento
result = calc4('soma', 10, 5)
console.log(result)

//Exemplo2

// function calc4(operacao, num1, num2){
//     let resultado
//     if (operacao === 'soma'){
//         let result = num1 + num2
//         return `O resultado da soma é ${resultado}`
//     } else if (operacao === 'subtração'){
//         let resultado = num1 - num2
//         return `O resultado da subtração é ${resultado}`
//     } else if (operacao === 'multiplicação'){
//         let resultado = num1 * num2
//         return `O resultado da multiplicação é ${resultado}`
//     } else if (operacao === 'divisão'){
//         let resultado = num1 / num2
//         return `O resultado da divisão é ${resultado}`
//     } else{
//         return `${operacao} não é válido.`
//     }
// }

// result = calc4('divisão', 10, 5)
// console.log(result)