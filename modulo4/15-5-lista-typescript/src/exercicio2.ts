//EXERCICIO2
/*
  Crie um objeto que representa a sua pessoa e possua 3 propriedades:
  - nome, de tipo string;
  - idade, de tipo number;
  - corFavorita, enum das cores do arco-íris.
*/
function exercicio2(name:string, birthDate:string):string {
  const separator:string[] = birthDate.split("/")
  return `Olá, me chamo ${name}, nasci no dia ${separator[0]}, no mês de ${separator[1]} no ano de ${separator[2]}.`
}
console.log(exercicio2(process.argv[2], process.argv[3]))