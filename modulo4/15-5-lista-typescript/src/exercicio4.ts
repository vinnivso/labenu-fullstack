//EXERCICIO 4
/*
  O array abaixo traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou home office:

  Considerando o array acima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este array como parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente.
  - Entrada esperada → type[]
  - Saída esperada → type[]
*/
enum SETOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}
type Employee = {
  nome:string,
  salario:number,
  setor:string,
  presencial:boolean
}
const personArray: Employee[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]
function exercicio4(array:Employee[], sector?:string):Employee[] | string {
  if(!sector) {
    return array
  } else if(sector === "marketing" || sector === "vendas" || sector === "financeiro") {
    return array.filter(element => element.setor === sector && element.presencial === true)
  } else {
    return `Parâmetros Inválidos`
  }
}
console.log(exercicio4(personArray))
console.log(exercicio4(personArray,"marketing"))
console.log(exercicio4(personArray,"vendas"))
console.log(exercicio4(personArray,"financeiro"))
console.log(exercicio4(personArray,"dibraldinho"))