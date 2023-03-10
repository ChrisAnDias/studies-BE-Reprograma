//Conecta o array do objeto livros do arquivo database a essa aba
const livros = require('../database')


//função que irá ordenar o array a partir de uma categoria específica. no caso, nº de páginas
const listarLivrosOrdenados = () => {
    const livrosOrdenados = livros.sort(function (a, b) {
        return a.paginas - b.paginas;
    });
    console.table(livrosOrdenados)
}

//permite exportação dessa aba
module.exports = listarLivrosOrdenados

//Importante que a função/constante tenha o mesmo nome da aba(arquivo). No fim das contas, ele exporta a função
//tentei por um nome de função diferente e deu problema no reconhecimento do módulo


