//receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

//Utilizando function
function statusAluno(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3
    if ((media >= 7) && (media <=10)) {
        return `A média é ${media.toFixed(1)} e o aluno está Aprovado!.`
    } else if ((media >= 5) && (media <= 7)) {
        return `A média é ${media.toFixed(1)} e o aluno está de Recuperação .`
    } else if (media < 5) {
        return `A média é ${media.toFixed(1)} e o aluno está Reprovado!.`
    } else {
        return 'A média deve ser de 0 a 10. Reveja seus parâmetros.'
    }
}
//Teste de funcionamento
let result = statusAluno(8, 2, 5)
console.log(result)