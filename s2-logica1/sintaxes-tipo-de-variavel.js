
//Sintaxe de uma função
function soma (a,b) {
    return a + b
}

soma(2,5) // 7

//Determimando tipos usando o operador typeof

var age = 32 
console.log(typeof age) //Number

var myName = "Simara" 
console.log(typeof myName) //String

let lastName
console.log(typeof lastName) //undefined pois não foi definido valor para variável

let myObject = {
    "name" : "Simara",
    "age": 32
}

console.log(typeof myObject) //object

let object = null
console.log(typeof object) //object

function subtrair(){}
console.log(typeof subtrair) //function

let alunas = []
console.log(typeof alunas) //object

//operadores
//unário
let x = 1;
x = -x;

alert( x ); // -1, um operador menos unário que inverte o sinal

//binário
let x = 1, y = 3;
alert( y - x ); // 2, um operador binário que subtrai um número de outro