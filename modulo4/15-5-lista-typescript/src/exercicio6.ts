//EXERCICIO 6
/*
  Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente.

  Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

  - Entrada esperada → type[ ]
  - Saída esperada → type[ ]

  Dicas:
  - Crie um type para os dados dos clientes.
  - Para soma os débitos use o método .reduce()
*/
type Client = {
  cliente: string
  saldoTotal: number
  debitos: number[]
}
const clientes:Client[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
]
// function exercicio6(parameter: Client[]):Client[] {
//   return parameter.map(element => {
//     for(let acc of element.debitos) {
//       element.saldoTotal -= acc
//     }
//     return element
//   }).filter(element => element.saldoTotal < 0)
// }
// console.log(exercicio6(clientes))

function exercicio6(parameter:Client[]):Client[] {
  return parameter.map(element => {
    element.saldoTotal -= element.debitos.reduce((acc, num) => acc + num, 0)
    element.debitos = []
    return element
  }).filter(element => element.saldoTotal < 0)
}
console.log(exercicio6(clientes))