//Exercita laço de repetição usando for e break

/*Utiliza a estrutura de repetição for para imprimir no console conforme instruções:
a) números de 1 a 50  
b) quando chegar no número 25 interrompa a instrução e pare o loop 
c) quando chegar no número 10 pule a instrução */

//Letra a. Utilizando loop
for (let i = 1; i <= 50; i++) {
    console.log(i)
  }

//Letra b. Interrupção de um loop
for (let i = 1; i <= 50; i++) {
    console.log(i);
    if(i === 25) {
        break;
    }
}

//Letra c. Pulando loop.
for (let i = 1; i <= 50; i++) {
    if (i === 10) {
        continue;
    }
    console.log('O número atual é: ' + i);
}
