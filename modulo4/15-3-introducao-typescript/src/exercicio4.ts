function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero:number //Tipagem opcional
    let menorNumero:number //Tipagem opcional
    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    }else {
        maiorNumero = num2
        menorNumero = num1
    }
    const diferenca = maiorNumero - menorNumero
    return diferenca
}
console.log(comparaDoisNumeros(20, 50))
console.log(comparaDoisNumeros(+(process.argv[2]), +(process.argv[3])))