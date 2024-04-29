sair=false;
while (!sair) {
    let pilhaDeCartas = ["às de ouros", "quatro de espada", "três de copas", "valete de paus"];
    opcoes = prompt(
        "Pilha de Cartas\n" +
        "\nNúmero de cartas presentes no baralho " + pilhaDeCartas.length + "." +
        "\n\nMenu de opções:" +
        "\n1. Adicionar uma carta." +
        "\n2. Puxar uma carta" +
        "\n3. Sair"
    );

    switch (opcoes) {
        case "1":
            let carta = prompt("Informe o nome da carta a ser adicionada:")
            pilhaDeCartas.unshift(carta)
            break
        case "2":
            if (pilhaDeCartas.length > 0) {
                console.log("Estado atual do array pilhaDeCartas:", pilhaDeCartas);
                alert("Você retirou a carta " + pilhaDeCartas[pilhaDeCartas.length -1] + ".");
                pilhaDeCartas.pop()}
                else {
                    alert("Não a mais cartas para retirar.")
                };
            break
        case "3":
            sair = true;
            break
        default:
            alert("Digite uma opção válida no menu.")
    };
};