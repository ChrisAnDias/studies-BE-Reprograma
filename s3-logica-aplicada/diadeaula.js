// Programa informa os dias de aula da turma on-16-reprograma.

//Método function
function temaula(dia) {
    if (dia == 'quarta-feira') {
        return 'Tem aula sim! Simbora!'
    } else if (dia == 'sábado') {
        return 'Sabadou com aula da Reprograma! Acorda pra cuspir e fica ON!'
    } else {
        return `Já que hoje é ${dia} , o encontro não é obrigatório. Mas veja no slack se tem algo especial para hoje e só vai! `
    }
}

//Teste de funcionamento
console.log(temaula('sábado'))

//Teste de funcionamenteo
// let dia = 'quarta-feira'

//Método if|else
// if (dia == 'quarta-feira') {
//     console.log('Tem aula sim! Simbora!')
// } else if (dia == 'sábado') {
//     console.log('Sabadou com aula da Reprograma! Acorda pra cuspir e fica ON!')
// } else {
//     console.log(`Já que hoje é ${dia} , o encontro não é obrigatório. Mas veja no slack se tem algo especial para hoje e só vai! `)
// }



