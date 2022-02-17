// ------------------ Exercícios de INTERPRETAÇÃO de Código ------------------------
//01
function minhaFuncao(variavel) {
	return variavel * 5
}
console.log(minhaFuncao(2))
// RESOLUÇÃO: Vai imprimir no console o resultado expresso = 10
console.log(minhaFuncao(10))
// RESOLUÇÃO: Vai imprimir no console o resultado expresso = 50
// RESOLUÇÃO: Se retirarmos o "console.log" e chamarmos a função, não irá iremos visualizar o resultado da expressão.

//02
let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// RESOLUÇÃO: A função vai receber um texto que terá todo seu texto refeito para letras minúsculas e após isso vai verificar se a palavra 'cenoura' está contida naquele texto.
/* RESOLUÇÃO: i. - true
              ii. - true
              iii. true */

// ------------------ Exercícios de ESCRITA de Código ------------------------------
//01
function sobreEu(){
    console.log(`Eu sou Vinicius, tenho 27 anos, moro em Mogi das Cruzes e sou estudante da Labenu.`)
}
sobreEu()


const userName = prompt('Please, insert your name')
const userAge = Number(prompt('Please, insert your age'))
const userAdress = prompt('Please, insert your adress')
const userJob = prompt('Please, insert your job')
function userInformaton(nome, idade, endereco, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
}
console.log(userInformaton(userName, userAge, userAdress, userJob))

//02
//A
let userFirstNumber = Number(prompt('Please insert your first number'))
let userSecondNumber = Number(prompt('Please insert your second number'))
function somaDoisNumeros(primeiroNumero, segundoNumero) {
  return primeiroNumero + segundoNumero
}
console.log(`A soma dos dois numeros equivalem: ${somaDoisNumeros(userFirstNumber, userSecondNumber)}`)


//B
userFirstNumber = Number(prompt('Please insert your first number'))
userSecondNumber = Number(prompt('Please insert your second number'))
function comparativoMaiorOuIgual(primeiroNumero, segundoNumero) {
    return primeiroNumero >= segundoNumero
}
console.log(`O primeiro número é maior ou igual ao segundo? ${comparativoMaiorOuIgual(userFirstNumber, userSecondNumber)}`)


//C
userFirstNumber = Number(prompt('Please insert your first number'))
function parOuImpar(primeiroNumero) {
  return primeiroNumero % 2 === 0
}
console.log(`O primeiro número é par? ${parOuImpar(userFirstNumber)}`)


//D
const userPhrase = prompt('Please insert your message')
function mensagemMaiusculaTamanho(mensagem) {
    return ` A frase digitada pelo usuário é: ${mensagem.toUpperCase()} e possui ${mensagem.length} caracteres.`
}
console.log(mensagemMaiusculaTamanho(userPhrase))

//03
const userInputFirstNumber = Number(prompt('Please insert your first number'))
const userInputSecondNumber = Number(prompt('Please insert your second number'))
function operacaoSoma(firstNumber, secondNumber) {
    const soma = firstNumber + secondNumber
    return soma
}
function operacaoSubtracao(firstNumber, secondNumber) {
    const subtracao = firstNumber - secondNumber
    return subtracao
}
function operacaoMultiplicacao(firstNumber, secondNumber) {
    const multiplicacao = firstNumber * secondNumber
    return multiplicacao
}
function operacaoDivisao(firstNumber, secondNumber) {
    const divisao = firstNumber / secondNumber
    return divisao
}
console.log(`Números Inseridos: ${userInputFirstNumber} e ${userInputSecondNumber}
Soma: ${operacaoSoma(userInputFirstNumber, userInputSecondNumber)}
Diferença: ${operacaoSubtracao(userInputFirstNumber, userInputSecondNumber)}
Multiplicação: ${operacaoMultiplicacao(userInputFirstNumber, userInputSecondNumber)}
Divisão: ${operacaoDivisao(userInputFirstNumber, userInputSecondNumber)}`)


// ------------------ Exercícios do DESAFIO ----------------------------------------
//01
const userInputFirstNumberParametro = Number(prompt('Please insert your first number'))
const userParametro = arrowFunction1(userInputFirstNumberParametro)
const arrowFunction1 = (parametro) => {
    return parametro
}
console.log(userParametro)


const userInputFirstNumberChallenge = Number(prompt('Please insert your first number'))
const userInputSecondNumberChallenge = Number(prompt('Please insert your second number'))
const arrowFunction2 = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}
let macroSoma = arrowFunction2(userInputFirstNumber, userInputSecondNumber)
let somaTransfer = arrowFunction1(macroSoma)
console.log(somaTransfer)


//02
const userInputFirstNumberPitagoras = Number(prompt('Please insert your first number'))
const userInputSecondNumberPitagoras = Number(prompt('Please insert your second number'))
function teoremaDePitagoras(catetoOposto, catetoAdjacente) {
    return Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2))
}
console.log(teoremaDePitagoras(userInputFirstNumber, userInputSecondNumber))