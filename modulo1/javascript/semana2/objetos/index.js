// ------------------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <------
// -----------------------> EXERCÍCIO 1 <--------------------------
const filme = {
  nome: "Auto da Compadecida",
  ano: 2000,
  elenco: [
    "Matheus Nachtergaele",
    "Selton Mello",
    "Denise Fraga",
    "Virginia Cavendish",
  ],
  transmissoesHoje: [
    { canal: "Telecine", horario: "21h" },
    { canal: "Canal Brasil", horario: "19h" },
    { canal: "Globo", horario: "14h" },
  ],
}

console.log(filme.elenco[0])
//RESOLUÇÃO: Console vai imprimir o que está no primeiro elemento da Array = Matheus Nachtergaele.
console.log(filme.elenco[filme.elenco.length - 1])
//RESOLUÇÃO: Console vai imprimir o que está no último elemento da Array = Virginia Cavendish.
console.log(filme.transmissoesHoje[2])
//RESOLUÇÃO: Console vai imprimir o que encontra-se no índice 2 da respectiva array de objetos, sendo assim o Console vai imprimir o que encontra-se a última linha, logo: "canal: Globo, horario: 14h".

// -----------------------> EXERCÍCIO 2 <--------------------------
const cachorro = {
  nome: "Juca",
  idade: 3,
  raca: "SRD",
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
//RESOLUÇÃO: Console vai imprimir o que compoem o objeto cachorro, sendo assim. Seu nome, idade e raca.
console.log(gato)
//RESOLUÇÃO: Convole vai imprimir o que compoem o objeto gato, porém objeto gato é uma cópia de cachorro com alteração de seu nome, de Juca para Juba.
console.log(tartaruga)
//RESOLUÇÃO: Console vai imprimir o que compoem o objeto tartaruga, porém objeto tartaruga é uma cópia de gato, onde no objeto tartaruga é trocado o "a", pelo "o" em nome. Sendo assim, de Juba para Jubo.
//RESOLUÇÃO: Os "...", copia um objeto ou array de objetos.

// -----------------------> EXERCÍCIO 3 <--------------------------
function minhaFuncao(objeto, propriedade) {
  return objeto[propriedade]
}

const pessoa = {
  nome: "Caio",
  idade: 23,
  backender: false,
}

console.log(minhaFuncao(pessoa, "backender"))
//RESOLUÇÃO: Console vai imprimir o valor atribuído para backender.
// console.log(minhaFuncao(pessoa, "altura"))
//RESOLUÇÃO: Console vai retornar como undefined ou synthax error, uma vez que não existe a chave altura em pessoa.

// ------------------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <-----------
// -----------------------> EXERCÍCIO 1 <--------------------------
const personObjectOne = {
  userName: prompt("Please insert your name."),
  userNickNames: prompt(
    'Please insert your nicknames, separeted by ",".'
  ).split(",", 3),
}
function userPhrase(userObject) {
  const {userName, userNickNames} = userObject
  console.log(
    `Eu sou ${userName}, mas podem me chamar de: ${userNickNames[0]}, ${userNickNames[1]} ou ${userNickNames[2]}.`
  )
}
userPhrase(personObjectOne)
const personObjectTwo = {
  ...personObjectOne,
  userNickNames: prompt('Please insert your nicknames, separed by ",".').split(",",3)
}
userPhrase(personObjectTwo)

// -----------------------> EXERCÍCIO 2 <--------------------------
// const userInputOne = {
//   userName: prompt("Please insert your name."),
//   userAge: Number(prompt("Please insert your age.")),
//   userOccupation: prompt("Please insert your occupation"),
// }
// const userInputTwo = {
//   userName: prompt("Please insert your name"),
//   userAge: Number(prompt("Please insert your age.")),
//   userOccupation: prompt("Please insert your occupation"),
// }
// function userPhrase(userObject) {
//   const {userName, userAge, userOccupation} = userObject
//   console.log([
//     `O valor de nome é: ${userName}`,
//     `O número de caracteres do valor nome é: ${userName.length}`,
//     `O valor de idade é: ${userAge}`,
//     `O valor de profissão é: ${userOccupation}`,
//     `O número de caracteres do valor profissão é: ${userOccupation.length}`,
//   ])
// }
// userPhrase(userInputOne)
// userPhrase(userInputTwo)

// // -----------------------> EXERCÍCIO 3 <--------------------------
// let carrinho = []
// const objectFruitOne = {
//   userFruit: prompt("Please insert your most favorite fruit."),
//   disponobility: prompt(
//     'Do you have this fruit? (Answer only with "yes" or "no".)'
//   ).includes("yes"),
// }
// const objectFruitTwo = {
//   userFruit: prompt("Please insert your second favorite fruit."),
//   disponobility: prompt(
//     'Do you have this fruit? (Answer only with "yes" or "no".)'
//   ).includes("yes"),
// }
// const objectFruitThree = {
//   userFruit: prompt("Please insert your less favorite fruit."),
//   disponobility: prompt(
//     'Do you have this fruit? (Answer only with "yes" or "no".)'
//   ).includes("yes"),
// }
// function completandandoCarrinho(parameter1, parameter2, parameter3) {
//   carrinho.push(parameter1, parameter2, parameter3)
// }
// completandandoCarrinho(objectFruitOne, objectFruitTwo, objectFruitThree)
// console.log(carrinho)

// // ------------------> DESAFIOS <----------------------------------
// // -----------------------> EXERCÍCIO 1 <--------------------------
// function userInputChallenge() {
//   const userQuestionName = prompt("Please insert your name.")
//   const userQuestionAge = Number(prompt("Please insert your age."))
//   const userQuestionOccupation = prompt("Please insert your occupation.")

//   const personObjectChallenge = {
//     userName: userQuestionName,
//     userAge: userQuestionAge,
//     userOccupation: userQuestionOccupation,
//   }
//   const {userName, userAge, userOccupation} = personObjectChallenge
//   console.log(
//     `O nome do usuário é: ${userName}, possui ${userAge} anos e sua respectiva ocupação é ${userOccupation}.`
//   )
//   console.log(typeof personObjectChallenge)
// }
// userInputChallenge()

// // -----------------------> EXERCÍCIO 2 <--------------------------
// const matrix = {
//   nome: "Matrix",
//   anoDeLancamento: 1999
// };

// const johnWick = {
//   nome: "John Wick",
//   anoDeLancamento: 2014
// };

// function comparaAnoDeLancamento(primeiroFilme, segundoFilme) {
//   return `O primeiro filme foi lançado antes do segundo? ${
//     primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento
//   }
// O primeiro filme foi lançado no mesmo ano do segundo? ${
//     primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento
//   }`;
// }

// console.log(comparaAnoDeLancamento(matrix, johnWick));

// // -----------------------> EXERCÍCIO 3 <--------------------------
let carrinhoChallenge = []
const objectFruitOneChallenge = {
  userFruit: prompt("Please insert your most favorite fruit."),
  disponobility: prompt(
    'Do you have this fruit? (Answer only with "yes" or "no".)'
  ).includes("yes"),
}
const objectFruitTwoChallenge = {
  userFruit: prompt("Please insert your second favorite fruit."),
  disponobility: prompt(
    'Do you have this fruit? (Answer only with "yes" or "no".)'
  ).includes("yes"),
}
const objectFruitThreeChallenge = {
  userFruit: prompt("Please insert your less favorite fruit."),
  disponobility: prompt(
    'Do you have this fruit? (Answer only with "yes" or "no".)'
  ).includes("yes"),
}
function completandandoCarrinho(parameterOne, parameterTwo, parameterThree) {
  return carrinho.push(parameterOne, parameterTwo, parameterThree)
}
completandandoCarrinho(
  objectFruitOneChallenge,
  objectFruitTwoChallenge,
  objectFruitThreeChallenge
)
console.log(carrinhoChallenge)

function controleDoCarrinho(parameterOne, parameterTwo, parameterThree) {
  return {
    ...(parameterOne, parameterTwo, parameterThree),
    disponobility: !(parameterOne, parameterTwo, parameterThree).disponobility,
  }
}
console.log(
  controleDoCarrinho(
    objectFruitOneChallenge,
    objectFruitTwoChallenge,
    objectFruitThreeChallenge
  )
)
