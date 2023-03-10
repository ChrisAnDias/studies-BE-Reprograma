/* Programa irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, 
para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' 
e por fim, se não cumprir nenhum dos casos acima imprime o próprio número.*/

// Exemplo usando if else

//Definindo variável
let num = 9
//Uso de condições if|else
if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log('FizzBuzz')
} else if (num % 5 == 0) {
    console.log('Buzz')
} else if (num % 3 == 0) {
    console.log('Fizz')
} else {
    console.log(num)
}

/* ----------------Exemplo usando switch|case---------------------
/* Importante compreender que a operação lógica que consta nos cases se trata do tipo BOOLEAN. E so é
possível obter um resultado condizente se for comparado tambem com BOOLEAN. A ORDEM DOS CASES aqui é muito
importante. Primeiro deve testar se a variável atende aos 2 casos.*/
//-----------------------------------------------------------------

// Definindo variável
// let num = 10

//Uso switch
// switch (true) {
//     case ((num % 3 == 0) && (num % 5 == 0)):
//         console.log('FizzBuzz')
//         break
//     case (num % 3 == 0):
//         console.log('Fizz')
//         break
//     case (num % 5 == 0):
//         console.log('Buzz')
//         break
//     default:
//         `${num}`
// }



// ------------------Exemplo utilizando flag----------------
// O uso do flag permite a criação de uma variável auxiliar que substitui o valor da variável para poder
// usá-la na condição que se necessita
// ----------------------------------------------------------

// Definindo variável
//let num = 15

// Condições flag
// if (num % 3 == 0){
//     flag = 3}
// if (num % 5 == 0){
//     flag = 5}
// if ((num % 3 == 0) && (num % 5 == 0)){
//     flag = 35
// }

//Uso switch
// switch (flag) {
//     case (3):
//         console.log('Fizz')
//         break
//     case (5):
//         console.log('Buzz')
//         break
//     case (35):
//         console.log('FizzBuzz')
//         break
//     default:
//         `${num}`
// }