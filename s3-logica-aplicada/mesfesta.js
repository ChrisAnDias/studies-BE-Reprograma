//Retorna se é mês de Carnaval ou não.

function resultfesta(mes) {
    switch (mes) {
        case 'fevereiro':
            return 'é carnaval'
            break
        default:
            return 'não é festa'
    }
}

console.log(resultfesta('Fevereiro'.toLocaleLowerCase))