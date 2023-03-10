///Algoritmo que recebe um número (1-7) e devolve o dia da semana correspondente. Considerando 1 o 'Domingo'.

//Utilizando function, switch, case
function diaDaSemana(num) {
    switch (num) {
        case 1:
            return 'Domingo'
            break
        case 2:
            return 'Segunda-feira'
            break
        case 3:
            return 'Terça-feira'
            break
        case 4:
            return 'Quarta-feira'
            break
        case 5:
            return 'Quinta-feira'
            break
        case 6:
            return 'Sexta-feira'
            break
        case 7:
            return 'Sábado'
            break
        default:
            `Não há dia da semana para esse ${num}`
    }
}

//Teste de funcionamento
let result = diaDaSemana(2)
console.log(result)

