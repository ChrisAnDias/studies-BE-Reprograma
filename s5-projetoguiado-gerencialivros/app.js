//sincronizando dados de outras abas
const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listaRecomendados = require('./controllers/listaRecomendados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

// //teste de funcionamento
// console.log(livros)
// const resposta = read.question('Esta funcionando? (S/N) ').toUpperCase()
// console.log(resposta)

/*Requisitos
 buscarLivros Deverá ser possível buscar livros pela categoria
 listarLivrosOrdenados Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
 listarRecomendados Deverá listar livros que já foram lidos e que são recomendados
 listarLivrosNaoLidos Deverá listar livros que ainda não foram lidos */

const resposta = read.question(`
 =============== Menu ============
 1 - CATEGORIA: Buscar livro por Categoria
 2 - ORDENAR: Ordenar livros por quantidade de pagina
 3 - RECOMENDADOS: Buscar livros recomendados
 4 - LISTA DE DESEJOS: Busca livros nao lidos
 
 5 - SAIR

 Digite um numero[1-5]: 
 `)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listaRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
    default:
        console.log('Fim do algoritmo')
        break
}