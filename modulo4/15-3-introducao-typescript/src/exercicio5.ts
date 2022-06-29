function checaRenovacaoRG():boolean {
    const anoAtual:number = +(process.argv[2])
    const anoNascimento:number = +(process.argv[3])
    const anoEmissao:number = +(process.argv[4])

    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao

    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
 }
 console.log(checaRenovacaoRG())


//Outra alternativa de refatoração da função
/*
    function checarRenovacaoRG (anoAtual: number, anoNascimento: number, anoEmissao: number): boolean | string{
        let idade: number = anoAtual - anoNascimento
     let tempoCarteira: number = anoAtual - anoEmissao

        if(idade <= 20 ) return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
        else if(idade >= 20 || idade <= 50) return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
        else if(idade > 50) return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
        else return "error"
    }
    console.log(checarRenovacaoRG(+(process.argv[2]), +(process.argv[3]), +(process.argv[4])))
*/