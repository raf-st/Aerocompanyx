var readline = require('readline-sync')
var opcao = null
console.log("-----Passagens aéreas-----")
console.log("1 - Consultar voos")
console.log("2 - Mapa de assentos")
console.log("3 - Comprar passagem")
console.log("4 - Emitir ticket")
console.log("0 - Encerrar o programa")
while (opcao != 0) {
    opcao = readline.question("Digite uma opcao")

    if (opcao == 1) {
        console.log("+-----Passagens Aéreas-----+")
        console.log("Você está em ==> Consulta de voos")
        console.log("Origem          x          Destino")
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        console.log("Presidente Prudente          São Paulo")
        console.log("Presidente Prudente          Paris")
        console.log("Presidente Prudente          New York")
        console.log("Presidente Prudente          Ceará")
    }
    else if (opcao == 2) {
        console.log("+-----Passagens Aéreas-----+")
        console.log("Você está em ==> Mapa de assentos")
        console.log("---------------------------------")
        console.log("A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12")
        console.log("")
        console.log("B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12")
        console.log("--------------------------------------")
    }
    else if (opcao == 3) {
        var nome = readline.question("Informe seu nome: ")
        var sobrenome = readline.question("Informe seu Sobrenome: ")
        var idade = readline.question("Informe sua idade: ")
        while (idade < 18) {
            var idade = readline.question("E necessario ser maior de idade - Informe sua idade: ")
        }
        var assento = readline.question("Informe seu assento: ")
        assento = readline.question("Informe seu assento: ")
        assentoValido = false

        while (assentoValido == false) {
            for (let index = 1; index < 13; index++) {
                if (assento == "A" + index || assento == "B" + index) {
                    assentoValido = true
                }
            }
            if (assentoValido == false) {
                console.log("Assento inválido ")
                console.log("Escolha entre: A1 - A2 - A3 - A4 - A5 - A6 - A7 - A8 - A9 - A10 - A11 - A12")
                console.log("               B1 - B2 - B3 - B4 - B5 - B6 - B7 - B8 - B9 - B10 - B11 - B12")
                assento = readline.question("Assento: ")
            }
        }
        var origem = readline.question("Informe sua origem: ")
        while (origem != "Presidente Prudente") {
            var origem = readline.question("Informe sua origem: ")
        }
        var destino = readline.question("Informe seu destino: ")
    }
    else if (opcao == 4) {
        console.log("+-----Passagens Aéreas-----+")
        console.log("Você está em ==> Emitir ticket")
        console.log("*************************************")
        console.log("*Obrigado por viajar conosco :)     *")
        console.log("*                                   *")
        console.log("Cliente: " + nome + " " + sobrenome)
        console.log("Idade: " + idade + " Assento: " + assento)
        console.log("Origem/Destino: " + origem + " > " + destino)
        console.log("*Status do voo: Confirmado          *")
        console.log("*                                   *")
        console.log("*************************************")
    }
}