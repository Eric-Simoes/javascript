let numero = parseFloat(prompt(
    "TABUADA\n" +
    "\nInforme um número para verificar sua tabuada de 1 até 20."
))

let resultado = ""
let indice = 1

for (indice; indice <= 20; indice+= 1) {
    tabuada = numero * indice
    resultado += numero + " x " + indice + " = " + tabuada + "\n"
}
alert("Calculando...")
alert("Resultado:\n\n" + resultado)