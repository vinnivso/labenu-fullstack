//EXERCÍCIO 1
/*
  Faça a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para a URL base da API. Esse endpoint pode responder apenas com uma mensagem de “Servidor funcionando!”.

  Dicas:
  - URL base de uma API é definida por “/”
*/
import express from "express"
import cors from "cors"

//Configuração inicial do Express
export const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () => console.log(`Server is running on port 3003`))


//EXERCÍCIO 2
/*
  Crie um array de usuários para servir como base de dados da nossa API e inicialize-o com 3 usuários. Cada usuário será representado pelas seguintes propriedades:
  - id: Identificação do usuário na lista.
  - name: Nome do usuário.
  - phone: Número de telefone do usuário.
  - email: E-mail do usuário.

  Dicas:
  - Os usuários devem ser representados por um type específico, com as propriedades definidas anteriormente.
  - A lista de usuários será um type[].
  - Você pode armazenar esta lista dentro do próprio arquivo da atividade ou criar um arquivo .json e importá-la (e também tipar) para o contexto da atividade.
*/
type User = {
  id: number,
  name: string,
  phone: number,
  email: string
}
let userList:User[] = [
  {id:1, name:`The Void`, phone:5511123456789, email:`thevoid@email.com`},
  {id:2, name:`The Null`, phone:5511234567890, email:`thenull@email.com`},
  {id:3, name:`Tiamat`, phone:5511345678901, email:`tiamat@email.com`}
]


//EXERCÍCIO 3
/*
  Construa um endpoint que retorne todos os usuários criados no Exercício 2.
  Entradas → Nenhuma.
  Saídas → Lista de usuários.
*/
app.get("/users", (request:express.Request, response:express.Response) => {
  if (!userList.length) response.status(401).send({message:`Nenhum usuário cadastrado`})
  else response.status(200).send({users:userList})
})


//EXERCÍCIO 4
/*
  Construa um endpoint que busca um usuário baseado em sua id.
  Entradas → Identificação do usuário.
  Saídas → Usuário e seus respectivos dados.

  Dicas:
  - Utilize o params para identificar o usuário selecionado.
  - Utilize o método .filter() para identificar o usuário selecionado.
*/
app.get("/users/:id", (request: express.Request, response:express.Response) => {
  const id = Number(request.params.id)

  if(!id) response.status(400).send({message:`Not Informed an ID`})
  else {
    const userFilter = userList.filter(element => id === element.id)
    response.status(200).send({user: userFilter[0]})
  }
})


//EXERCÍCIO 5
/*
  Construa um endpoint que permita alterar o telefone de um usuário baseado em sua id.
  Entradas → Identificação do usuário e novo valor para telefone do usuário.
  Saídas → Mensagem de sucesso e usuário com valor alterado.

  Dicas:
  - Utilize o params para identificar o usuário a ser alterado.
  - Utilize o body para receber o novo telefone do usuário.
  - Utilize o método .map() para identificar o usuário selecionado e efetuar a modificação.
*/
app.put("/users/:id", (request:express.Request, response:express.Response) => {
  const id = Number(request.params.id)
  const {phone} = request.body

  if(!id) response.status(400).send({message:`Insert a valid ID`})
  else {
    const updateUserList = userList.map(element => {
      if (element.id === id) return {...element, phone:phone}
    })
    userList = updateUserList

    const updateUser = userList.filter(element => element.id === id)
    response.status(200).send({message:`User changed with success!`, user:updateUser[0]})
  }
})


//EXERCÍCIO 6
/*
  Construa um endpoint para deletar um usuário baseado em sua id.
  Entradas → Identificação do usuário.
  Saídas → Mensagem de sucesso da operação.

  Dicas:
  - Utilize o params para identificar o usuário a ser removido.
  - Utilize o método .filter() para promover a remoção.
*/
app.delete("/users/:id", (request:express.Request, response:express.Response) => {
  const id = Number(request.params.id)

  if(!id) response.status(400).send({message:`Insert a valid ID`})
  else {
    const searchId = userList.findIndex(element => element.id === id)
    userList.splice(searchId,1)
    response.status(200).send(userList)
  }
})


//EXERCÍCIO 7
/*
  Você acabou de conseguir um emprego em uma importadora e precisa continuar a desenvolver o sistema de organização de estoque da empresa. A pessoa desenvolvedora anterior a você chegou a criar uma função que ajusta os preços para o formato brasileiro, mas não chegou a implementa-la:

  Código atual:
  ```jsx
  const ajustaPreco = (preco :number): string => {
    const valorAjustado: string = preco.toFixed(2).replace('.', ',')
    return "R$ "+valorAjustado
  }
  ```

  O seguinte array traz o estoque atual da empresa:
  ```jsx
  [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
  ]
  ```

  Aproveitando a função já feita, faça uma nova função que receba o array de estoque como parâmetro, use a função ajustaPreco() para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto.
  - Entrada esperada → type[ ]
  - Saída esperada → type[ ]

  Dicas:
  - Crie um type para o produtos.
  - Nesse type use o símbolo de barra “ | “ para permitir que o valorUnitario aceite tanto um number como uma string.
  - Você pode impor um determinado tipo a uma variável usando a notação “ as ”
  Exemplo → valorUnitario as number
*/
type Produto = {
	nome: string,
	quantidade: number,
	valorUnitario: number | string
}

const estoque: Produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

const ajustaPreco = (preco: number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ " + valorAjustado
}

function formataEstoque(lista: Produto[]): Produto[] {
	const produtosAjustados = lista.map(produto => {
		produto.valorUnitario = ajustaPreco(produto.valorUnitario as number)
		return produto
	})

	const copiaProdutos = [...produtosAjustados]
	const resultado = copiaProdutos.sort((a: Produto, b: Produto) => {
        return a.quantidade - b.quantidade
    })


	return resultado
}
console.log(formataEstoque(estoque))


//EXERCÍCIO 8
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
  const cond2 = idade > 26 && idade <= 50 && anosEmiss >= 10
  const cond3 = anosEmiss >= 15

  return cond1 || cond2 || cond3
}

console.log(checaSeVencido("13/05/1997", "13/06/2017")) // 25 anos e 5 anos de carteira // true
console.log(checaSeVencido("13/05/1997", "13/06/2018")) // 25 anos e 4 anos de carteira // false

console.log(checaSeVencido("13/05/1987", "13/06/2012")) // 35 anos e 10 anos de carteira // true
console.log(checaSeVencido("13/05/1987", "13/06/2013")) // 35 anos e 9 anos de carteira // false

console.log(checaSeVencido("13/05/1971", "13/06/2007")) // 51 anos e 15 anos de carteira // true
console.log(checaSeVencido("13/05/1971", "13/06/2008")) // 51 anos e 14 anos de carteira // false


//EXERCÍCIO 9
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
function checaSeRepete(palavra: string): boolean {
  let isRepete = false
  const palavraOrdenada = palavra.split("").sort()

  for (let i=0; i < palavraOrdenada.length; i++) {
      if (palavraOrdenada[i] === palavraOrdenada[i + 1]) {
          isRepete = true
      }
  }

  return isRepete
}

function checaAnagrama(palavra: string): number {
  const isRepete = checaSeRepete(palavra)
  if (isRepete) return 0

  let resultado = 1
  for (let i = 1; i <= palavra.length; i++) {
      resultado *= i
  }

  return resultado
}
console.log(checaAnagrama("banana"))
console.log(checaAnagrama("boi"))
console.log(checaAnagrama("comida"))