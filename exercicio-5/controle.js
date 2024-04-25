opcao = "3"
let dinheiro = parseFloat(prompt(
    "Benvido(a) ao BANCO!\n" +
    "\nInsira o valor de sua conta corrente"
))

do {
    opcao = prompt(
        "MENU DE OPÇÕES\n" +
        "\n1. Despositar Valor\n" +
        "2. Sacar Valor\n" +
        "3. Sair"

    )
    if (opcao == "1") {
        deposito = parseFloat(prompt("Informe o valor a ser depositado: "))
        alert(
            "O valor de " + deposito + "R$" + (" será adcionado ao total de " + dinheiro + "R$")
        )
        adcao = dinheiro + deposito
        alert("Novo saldo é de : " + adcao + "R$")
    }

    if (opcao == "2") {
        let saque = parseFloat(prompt("Informe o valor a ser sacado: "))
        alert(
            "O valor de " + saque + "R$" + (" será retirado do total de " + dinheiro + "R$")
        )
        alert("Novo saldo é de : " + adcao + "R$")
    }

} while (opcao !== "3")