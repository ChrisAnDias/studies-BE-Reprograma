# Projeto guiado 1 - Gerenciamento de Livros
## Programa para gerenciamento livros
<br>

Nesse projeto utilizamos um arquivo .js para servir de database. <br>
No funcionamento o usuário recebe uma mensagem para digitar a resposta, em número de 1 a 5, e assim obter o resultado desejado.<br>
É um projetinho simples para exercitar o que foi aprendido até esta altura do curso.<br>

<br>

### Tópicos importantes praticados
<br>

- array de objetos
-  **métodos de iteração**: *filter(), sort()* e sua variação para **ordenar conforme característica específica**, *map()* entre outros artifícios como *functions, switch|case, readline-sync* etc.

<br>

**Texto enviado ao usuário para receber dele a resposta**
```
=============== Menu ============
 1 - CATEGORIA: Buscar livro por Categoria
 2 - ORDENAR: Ordenar livros por quantidade de pagina
 3 - RECOMENDADOS: Buscar livros recomendados
 4 - LISTA DE DESEJOS: Busca livros nao lidos
 
 5 - SAIR

 Digite um numero[1-5]: 
```


<br>
### Arquitetura
<br>

```
 📁 s5-projetoguiado-gerencialivros
   |- 📁 controllers
   |       |- 📑 buscarLivros.js
   |       |- 📑 listaRecomendados.js
   |       |- 📑 listarLivrosNaoLidos.js
   |       |- 📑 listarLivrosOrdenados.js
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 app.js
   |- 📑 database.js
   |- 📑 README.md
   ```
<br>

### Tecnologias e pacotes usados
<br>

[JavaScript](https://www.javascript.com) | [Node.js](https://nodejs.org/en/) | [Git](https://git-scm.com) | [VSCode](https://code.visualstudio.com) 

<br>

 Dependências necessárisa:
- [nodemon](https://www.npmjs.com/package/nodemon)

<br>

### Instalação
<br>
Se você quiser ter essa APi na sua máquina, será necessário:
<br>

```bash
# Clonar o repositório
$ git clone https://github.com/ChrisAnDias/Mochidicas-Reprograma-ProjetoFinal.git

# Entrar na pasta do repositório
$ cd Mochidicas-Reprograma-ProjetoFinal

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```
<br>

