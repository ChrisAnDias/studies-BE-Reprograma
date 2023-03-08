/* Programa calcula o tempo de uma viagem de carro. Pergunta a distância a percorrer e a velocidade 
média esperada para a viagem. */

// Serão atribuídos valores com fins educativos e de conferência do código
let dist
let velom

//atribuições
dist = 200
velom = 100

/* Pela fórmula da velocidade média temos que: DeltaT = DeltaS / Vm.
Onde Vm: Velocidade Média, dada em km/h | DeltaS: Distância, dada em km. */

//fórmulas relacionando variáveis criadas
let tempo = dist / velom

//Exibição no console
console.log(`O tempo da viagem de carro será de ${tempo} horas `)