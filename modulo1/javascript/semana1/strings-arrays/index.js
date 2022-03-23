// ------------------ Exercícios de INTERPRETAÇÃO de Código ------------------------
// // 01
//A
let array
console.log('a. ', array)
//RESOLUÇÃO: Somente declarei uma variável e não é dessa maneira que faço uma array, "[]". Retorna como undefined.

//B
array = null
console.log('b. ', array)
//RESOLUÇÃO: Estou somente inserindo um valor "null" para a variável declarada como "array".

//C
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//RESOLUÇÃO: Dessa vez, estou declarando fazendo com que a variável "array" se torne uma lista com "n" elementos. Utilizando o ".length" estou solicitando que o console imprima o comprimento dessa lista.

//D
let i = 0
console.log('d. ', array[i])
//RESOLUÇÃO: Confuso, mas acredito que, como estamos mencionando a variável array, definida como = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], uma vez que dizemos let i = 0 (Declarando um valor 0 para a variável "i"), porém no console.log definimos "array[i]", ele vai puxar a posição 0 da variável array.

//E
array[i+1] = 19
console.log('e. ', array)
//RESOLUÇÃO: Ao realizarmos "array[i+1]=19", estamos dizendo o mesmo que "array[0+1]=19", portando, estamos passando a instrução para o javascript de que, na seguinte lista [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], atrelado a variável array. No índice [1], assuma um novo valor de 19, trocando seu antigo valor, que era 4.

//F
const valor = array[i+6]
console.log('f. ', valor)
//RESOLUÇÃO: Bem parecido com o anterior, só que nesse caso, estamos chamando uma posição em array. Estamos definindo que valor = índice de um elemento em array. Portanto, estamos afirmando que valor = array[0+6] --> valor = array[6], logo valor = 9.

// //02
const frase = prompt("Digite uma frase") //Subi num ônibus em Marrocos
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// RESOLUÇÃO: "frase.toUpperCase()", a frase digitada pelo usuário será retornado em caixa alta, logo: "SUBI NUM ÔNIBUS EM MARROCOS". .replaceAll("A", "I")" atrelado ao frase.toUpperCase(), faz com que substitua todos os "A" por "I". frase.length vai me retornar o comprimento daquela frase, lembrando que os espaçamentos também são constados. Sendo assim, a frase vai ficar: "SUBI NUM ÔNIBUS EM MIRROCOS".

// ------------------ Exercícios de ESCRITA de Código ------------------------------
// //01
const emailDoUsuario = prompt(`Qual seu e-mail?`)
const nomeDoUsuario = prompt(`Qual seu nome?`)
console.log(` O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}`)

// //02
//A
const comidasPreferidas = ["Pizza", "Uva", "Maça", "Churrasco", "Cajuzinho"]
console.log(comidasPreferidas)

//B
console.log(`"Essas são minhas comidas preferidas:"
  ${comidasPreferidas[0]}
  ${comidasPreferidas[1]}
  ${comidasPreferidas[2]}
  ${comidasPreferidas[3]}
  ${comidasPreferidas[4]}`)

//C
const comidaPreferidaDoUsuario = prompt(`Informe sua comida preferida`)
const capitalizeTransform = comidaPreferidaDoUsuario.charAt(0).toUpperCase() + comidaPreferidaDoUsuario.slice(1)
comidasPreferidas[1] = capitalizeTransform
console.log(comidasPreferidas)

// //03
//A
const listaDeTarefas = []

//B.1
// listaDeTarefas[0] = prompt(`Informe sua tarefa mais prioritária`)
// listaDeTarefas[1] = prompt(`Informe sua segunda tarefa mais importante do dia, após a prioritária`)
// listaDeTarefas[2] = prompt(`Informe aquela tarefa do famoso: "Se sobrar tempo eu faço"`)

//B.2
const primeiraTarefa = prompt(`Informe sua tarefa mais prioritária`)
const segundaTarefa = prompt(`Informe sua segunda tarefa mais importante do dia, após a prioritária`)
const terceiraTarefa = prompt(`Informe aquela tarefa do famoso: "Se sobrar tempo eu faço"`)
listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)

//C
console.log(listaDeTarefas)

//D.1
// const tarefaRealizada = +(prompt(`Digite o índice de uma tarefa que já realizou: 0, 1 ou 2`))

//D.2
const tarefaRealizada = +(prompt(`Digite o índice de uma tarefa que já realizou: 1, 2 ou 3`))


//E.1
// listaDeTarefas.splice(tarefaRealizada, 1)

//E.2
listaDeTarefas.splice(tarefaRealizada - 1, 1)

//F
console.log(listaDeTarefas)
// ------------------ DESAFIOS -----------------------------------------------------
//01
// .split() Separa o "input da array" para cada elemento, seguindo um determinado argumento. No caso abaixo, foi estabelecido a criação de uma array por espaço que o usuário realizar entre as palavras.
const fraseDesafio = prompt(`Opa! Digite uma frase batuta!`)
console.log(fraseDesafio.split(" "))

//02
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log("Index abacaxi: ", frutas.indexOf("Abacaxi"), "tamanho do array:", frutas.length);

//EXTRA
const frutaParaRemover = prompt(`Qual dessas frutas, você deseja remover? Banana, Morango, Abacaxi, Laranja ou Ameixa`)
frutas.splice(frutas.indexOf(frutaParaRemover), 1)
console.log(frutas)