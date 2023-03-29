# Conteúdos
## Event Loop, Callbacks, Promises e Async/Await

Abaixo segue algumas linhas com um **resumo** do aprendido na semana. 

### 1) Event Loop

Traduzindo para o português lê-se **laço de Eventos**. <br>
Basicamente entende-se que o **Node**, que é um ambiente que guiado por eventos, faz com que linha a linha, numa sequência da 1º linha em diante, seja executada. Pois o **JS** é uma linguagem *single thread*. A maneira de driblar esse fluxo são as funções assíncronas como *callbacks, setTimeOut.* <br>
Acontece que nem sempre em nossos códigos vai acontecer de tarefas serem imediatamente resolvidas. Pode ser que ocorra que alguma tarefa dessa linha só consiga ser resolvida um tempo depois do momento em que ela é chamada pelo node (é o que chama de '**modo assíncrono**'). Esse modo de o ambiente continuar a chamar a linha subsequente e deixar que a linha que tem uma atividade que precisa de um tempo para ser resolvida consiga retornar algo no seu tempo, na 'segunda rodada' do loop, é o que ficou conhecida como **Event Loop**.

<br>

### 2) Callbacks

Em tradução livre é *chamada de volta*. Trata-se de uma função, que **pode ser síncrona ou assíncrona**, e que geralmente é passada como argumento de outra função para completar uma ação, quando invocada dentro de uma função externa.

<br>

### 3) Promise
É um **objeto do JS** que **representa o sucesso ou a falha** de uma operação assíncrona. <br>
Sua sintaxe é inserindo dentro de uma função as palavras reservadas <em> new Promise(), </em> e passando como parâmetro as funções embutidas da API de Promise chamadas <em> resolve, reject </em>. <br>
Para acessar o valor da promisse, é preciso usar o <em> .then e .catch</em> em que o <em>.then </em> retorna se a promise deu certo, e o <em> .catch </em> se deu errro.


### 4) Async/Await

<br>
Possibilita que se escreva uma função baseada em Promise **como se fosse síncrono**, numa sintaxe mais confortável e legível.
<br>

---------------------------------------------
As atividades foram executadas seguindo a ordem de explicação aqui exposta.