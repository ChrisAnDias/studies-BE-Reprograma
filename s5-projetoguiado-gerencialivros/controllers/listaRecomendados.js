//Conecta o array do objeto livros do arquivo database a essa aba
const livros = require('../database')


//função que irá retornar lista de livros recomendados
const listaRecomendados = () => {
    const livrosRecomendados = livros.filter(livro => livro.recomenda)
    console.table(livrosRecomendados)
}

//permite exportação dessa aba
module.exports = listaRecomendados
console.log(listaRecomendados)
//Importante que a função/constante tenha o mesmo nome da aba(arquivo). No fim das contas, ele exporta a função
//tentei por um nome de função diferente e deu problema no reconhecimento do módulo


