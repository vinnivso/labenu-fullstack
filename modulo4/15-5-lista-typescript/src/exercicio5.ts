//EXERCICIO 5
/*
  Considerando o array de usuários a seguir, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários de role “admin”.

  - Entrada esperada → type[]
  - Saída esperada → string[]
*/
enum ROLE {
  ADMIN = "admin",
  USER = "user"
}
type User = {
  name:string,
  email:string,
  role:ROLE
}
const users:User[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}
]
function exercicio5(parameter: User[], role?:string):User[] | string[] {
  if(!role) {
    return parameter
  } else if (role === "admin" || role === "user") {
    return parameter.filter(element => element.role === role).map(element => element.email)
  } else {
    `Parâmetros Inválidos`
  }
}