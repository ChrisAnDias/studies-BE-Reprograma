//Algoritmo que recebe dois números e determina qual é o maior entre eles, se os números forem iguais, 
//no console aparecerá "Os números são iguais".

//Teste de funcionamento
let num1 = 1
let num2 = 1
//Utilizando if e else
if (num1 > num2) {
    console.log(`Temos que ${num1} é maior que ${num2}.`)
} else if (num2 > num1) {
    console.log(`Temos que ${num2} é maior que ${num1}.`)
} else {
    console.log(`Os números ${num1} e ${num2} são iguais`)
}
