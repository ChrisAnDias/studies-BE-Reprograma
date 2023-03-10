//Conecta o array do objeto livros do arquivo database a essa aba
const livros = require('../database')


//função que irá retornar lista de livros não lidos
const listarLivrosNaoLidos = () => {
    const livrosNaoLidos = livros.filter(livro => livro.leu === false)
    console.table(livrosNaoLidos)
}

//permite exportação dessa aba
module.exports = listarLivrosNaoLidos

//Importante que a função/constante tenha o mesmo nome da aba(arquivo). No fim das contas, ele exporta a função
//tentei por um nome de função diferente e deu problema no reconhecimento do módulo


