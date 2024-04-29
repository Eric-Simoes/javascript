let sair = false;
let fila = ["João", "Phellipe", "Francisco", "Natalia"];
let filaDeEspera = "";
while (!sair) {
    filaDeEspera = "";

    for (let indice = 0; indice < fila.length; indice++) {
        const elemento = fila[indice];
        filaDeEspera += (indice + 1) + ". " + elemento + "\n";
    }

    const menu = prompt(
        "Bem vindo(a) a Clínica Médica ABC\n\n" +
        "Pacientes em espera no momento:\n" +
        filaDeEspera +
        "\nMenu de Opções\n" +
        "1. Novo paciente.\n" +
        "2. Consultar paciente.\n" +
        "3. Sair"
    );

    switch (menu) {
        case "1":
            paciente = prompt("Informe o nome do paciente: ");
            fila.push(paciente);
            break;

        case "2":
            alert("Paciente " + fila[0] + " atendimento consultório 3.")
            fila.shift()
            break
        
        case "3":
            sair = true;
            break;
    }

    console.log(fila);
}