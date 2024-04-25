primeiroVeiculo = prompt("Digite o nome do primeiro veículo: ")
velocidadePrimeiroVeiculo = parseInt(prompt("Digite a velocidade do primeiro veículo: "))

segundoVeiculo = prompt("Digite o nome do segundo veículo: ")
velocidadeSegundoVeiculo = parseInt(prompt("Digite a velocidade do segundo veículo: "))

if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
    alert (
        "O primeiro veículo está mais rápido " + velocidadePrimeiroVeiculo + "km/h que o segundo veículo " + velocidadeSegundoVeiculo + "km/h."
    )
}

else if (velocidadeSegundoVeiculo > velocidadePrimeiroVeiculo) {
    alert (
        "O segundo veículo está mais rápido " + velocidadeSegundoVeiculo + "km/h que o primeiro veículo " + velocidadePrimeiroVeiculo + "km/h."
    )
}

else {
    alert (
        "ambos veículos estão com a mesma velocidade " + velocidadePrimeiroVeiculo + "km/h."
    )
}