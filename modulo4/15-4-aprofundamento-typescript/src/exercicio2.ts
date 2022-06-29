//EXERCICIO2
/*
  Crie um objeto que representa a sua pessoa e possua 3 propriedades:
  - nome, de tipo string;
  - idade, de tipo number;
  - corFavorita, enum das cores do arco-íris.
*/
enum FavoriteColors {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  LIGHTBLUE = "lightblue",
  BLUE = "blue",
  PURPLE = "purple"
}
type PersonSpecs = {
  name:string
  age:number
  personalColor?:string
}
const firstPerson:PersonSpecs = {
  name:process.argv[2],
  age:+(process.argv[3]),
  personalColor:FavoriteColors.LIGHTBLUE
}
console.log(firstPerson)

const secondPerson:PersonSpecs = {
  name:process.argv[2],
  age:+(process.argv[3]),
  personalColor:FavoriteColors.GREEN
}
console.log(secondPerson)

const thirdPerson:PersonSpecs = {
  name:process.argv[2],
  age:+(process.argv[3]),
  personalColor:FavoriteColors.RED
}
console.log(thirdPerson)
