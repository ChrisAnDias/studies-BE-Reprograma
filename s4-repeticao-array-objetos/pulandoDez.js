//Exercitar o laço repetição com for e while

/*Imprime na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 
60 e 90 imprime a palavra "CONTINUE". */

//método for:
for (let i = 20; i <= 100; i = i + 10) {
    if (i === 60 || i === 90) {
        console.log('CONTINUE');
        continue;
    }
    console.log('O número atual é: ' + i)
}

//método while:
let i = 20;
while (i <= 100) {
    if (i === 60 || i === 90) {
        console.log('CONTINUE');
        continue;
    }
    console.log('O número atual é: ' + i)
}