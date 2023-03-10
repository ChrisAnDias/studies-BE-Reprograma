// Exercita laço de reperição for dentro de função

//Função que irá receber um número e retornar o fatorial dele. 
//por exemplo: 3! = 3 * 2 * 1 // 6


function fatora(num) {
    for (let indice = 1; indice < num; indice++) {
        resultado = num * indice;
    }
    return resultado
}

console.log(fatora(3))