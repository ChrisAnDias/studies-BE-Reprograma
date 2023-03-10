//sincronizando dados de outras abas
const livros = require('../database')
const read = require('readline-sync')

//funçãobuscarLivros
const buscarLivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? (S/N) ').toUpperCase()
    if (opcaoInicial === 'S') {
        const categorias = livros.map(livro => livro.categoria)
        console.table(categorias)
      const escolhaCategoria = read.question('Digite uma categoria conforme tabela acima: ')
      const confirmacao = read.question('Tem certeza? (S/N) ').toUpperCase()
        if (confirmacao === 'S') {
            const livrosFiltrados = livros.filter((livro) => livro.categoria === escolhaCategoria)
            console.table(livrosFiltrados)
        }
    }
}

//console.log(categoria)
//Permite que esse arquivo seja chamado em outros arquivos das pastas assistidas pelo node
module.exports = buscarLivros