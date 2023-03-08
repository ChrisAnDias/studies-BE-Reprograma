// Escreve um programa que recebe uma altura em metros e o peso em kg e calcule o IMC.

let alt = 1.67 
let peso = 59
let imc = (peso / (alt * alt)).toFixed(2) //testar com Math.pow(altura, 2)

console.log(imc)
