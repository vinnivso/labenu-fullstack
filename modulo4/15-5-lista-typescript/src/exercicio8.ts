//EXERCICIO 8
/*
  Escreva uma função que recebe do usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

  Critério 1) Para pessoas com menos de 25 anos, ou exatamente 25 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
  Critério 2) Para pessoas entre 26 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
  Critério 3) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

  - Entrada esperada → string, string
  - Saída esperada → boolean

  Dicas:
  - Você precisará da data atual para fazer as operações e uma opção é utilizar new Date() para obter a data atual.
  - Para fazer as operações necessárias, você pode converter as datas para timestamp usando o método .getTime() na data.
*/
function calculaAnos(dataInvert: string): number {
  const dateInvert = new Date(dataInvert)
  const dateAtual = new Date
  const idade = Math.floor(
      (dateAtual.getTime() - dateInvert.getTime())
      / 1000 / 60 / 60 / 24 / 365.25
  )
  return idade
}

function checaSeVencido(dataNasc: string, dataEmiss: string): boolean {
  const dataNascInvert = dataNasc.split("/").reverse().join("/")
  const dataEmissInvert = dataEmiss.split("/").reverse().join("/")

  const idade = calculaAnos(dataNascInvert)
  const anosEmiss = calculaAnos(dataEmissInvert)

  const cond1 = idade <= 25 && anosEmiss >= 5
  const cond2 = idade > 26 && idade < 50 && anosEmiss >= 10
  const cond3 = anosEmiss >= 15

  return cond1 || cond2 || cond3
}

console.log(checaSeVencido("13/05/1997", "13/06/2017")) // 25 anos e 5 anos de carteira
console.log(checaSeVencido("13/05/1997", "13/06/2018")) // 25 anos e 4 anos de carteira

console.log(checaSeVencido("13/05/1987", "13/06/2012")) // 35 anos e 10 anos de carteira
console.log(checaSeVencido("13/05/1987", "13/06/2013")) // 35 anos e 9 anos de carteira

console.log(checaSeVencido("13/05/1972", "13/06/2007")) // 50 anos e 15 anos de carteira
console.log(checaSeVencido("13/05/1972", "13/06/2008")) // 50 anos e 14 anos de carteira