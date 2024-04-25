const nome = prompt("nome: ")
const sobrenome = prompt("sobrenome: ")
const campoDeEstudo = prompt("campo de estudo: ")
const anoDeNascimento = prompt("ano de nascimento: ")

alert (
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nAno de nascimento: " + (2024 - anoDeNascimento)
)