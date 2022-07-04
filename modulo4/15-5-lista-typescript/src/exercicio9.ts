//EXERCICIO 9
/*
  Uma operação matemática bastante utilizada em probabilidade e estatística é o fatorial, representado por um **!** (ponto de exclamação). Ele consiste em realizar a multiplicação de todos os números (a partir de 1) até aquele colocado na operação. Seguem exemplos:
  - 3! = 3*2*1 = 6
  - 4! = 4*3*2*1 = 24
  - 5! = 5*4*3*2*1 = 120
  - 6! = 6*5*4*3*2*1 = 720

  Isso vale para todos os números inteiros não-negativos (também chamados de "números naturais"). Dois valores para se tomar cuidado são:  1! = 1 e 0! = 1 (uma exceção da regra!).

  Uma aplicação interessante do fatorial é o cálculo de anagramas de uma palavra. Anagrama é uma outra palavra (não precisa existir em português) com as mesmas letras da anterior em ordem diferentes. Por exemplo, anagramas da palavra mesa são: ames, maes, meas, emsa, smea e muitos outros.

  A quantidade de anagramas de uma palavra sem nenhuma letra repetida é o fatorial da quantidade de letras. Para mesa, a quantidade é 4! =24

  Considerando tudo o que foi mencionado, escreva uma função que receba uma palavra (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

  - Entrada esperada → string
  - Saída esperada → number
  - Exemplos de saída:

  ```jsx
  // argumento "boi"
  6

  // argumento "comida"
  720
  ```
*/
function checkRepeat(parameter: string): boolean {
  let isRepeat = false
  const sortWord = parameter.split("").sort()

  for (let i=0; i < sortWord.length; i++) {
      if (sortWord[i] === sortWord[i + 1]) {
          isRepeat = true
      }
  }
  return isRepeat
}

function checkAnagram(parameter: string): number {
  const isRepeat = checkRepeat(parameter)
  if (isRepeat) return 0

  let result = 1
  for (let i = 1; i <= parameter.length; i++) {
      result *= i
  }
  return result
}
console.log(checkAnagram("banana"))
console.log(checkAnagram("boi"))
console.log(checkAnagram("comida"))