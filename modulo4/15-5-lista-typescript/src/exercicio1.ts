//EXERCICIO 1
/*
  Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.
  - Entrada esperada →  Várias possibilidades
  - Saída esperada → Nenhuma
*/
function exercicio1(parameter:any):void {
  console.log(typeof parameter)
}
exercicio1(process.argv[2]) //string se passado argv, undefined se não for passado
exercicio1({name:"Dibraldinho", age:42}) //object
exercicio1([{name:"Dibraldinho", age:42}]) //object
exercicio1(7) //number