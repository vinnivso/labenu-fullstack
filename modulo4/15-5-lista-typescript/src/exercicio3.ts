//EXERCICIO 3
/*
  Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: nome do filme; ano de lançamento e gênero do filme. Os gêneros da plataforma se limitam àqueles encontrados no ENUM abaixo:

  Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: pontuação em site de resenha (ex. Metacritic, RottenTomatoes, imdb).

  Considerando todas estas informações, crie uma função que receba todos esses dados como parâmetros( 3 essenciais + 1 opcional) e retorne um objeto organizado.
  - Entrada esperada → string, number, ENUM, number(opcional)
  - Saída esperada → type
*/
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Movie = {
  nome:string,
  anoLancamento:number,
  genero:GENERO,
  pontuacao?:number
}
function exercicio3(nome:string, anoLancamento:number, genero:GENERO, pontuacao?:number):Movie {
  if (!pontuacao) {
    return {
      nome,
      anoLancamento,
      genero,
      pontuacao
    }
  } else {
    return {
      nome,
      anoLancamento,
      genero
    }
  }
}
console.log(exercicio3("Duna", 2021, GENERO.ACAO))
console.log(exercicio3("Duna", 2021, GENERO.ACAO, 77))