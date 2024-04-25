//Cálculo de Dano
//Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, 
//depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, 
//e então calcule a quantidade de dano causado baseado nas seguintes regras:

atacante = prompt("Digite o nome do personagem atacante: ")
poderDeAtaque = parseInt(prompt("Insira o poder seu poder de ataque: "))

alert(
    "Persogem cadastrado com sucesso!\n" +
    "\nNome: " + atacante +
    "\nPoder de ataque: " + poderDeAtaque 
)

defensor = prompt("Digite o nome do persogem defensor: ")
pontosDeVida = parseInt(prompt("Insira o total de ponstos de vida deste personagem: "))
poderDeDefesa = parseInt(prompt("Insira seu poder de defesa: "))
escudo = (window.confirm("O personagem defensor possui escucudo?"))

alert(
    "Persogem cadastrado com sucesso!\n" +
    "\nNome: " + defensor +
    "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa 
)

if (escudo==true) {
    alert("Escudo: Sim")
}

else {
    alert("Escudo: Não")
}

//1. Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

if (poderDeAtaque < poderDeDefesa) {
    danoCausado = 0
}

//2. Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, 
//   o dano causado será igual a diferença entre o ataque e a defesa.

if (escudo==false) {
    if (poderDeAtaque > poderDeDefesa) {
        danoCausado = (poderDeAtaque - poderDeDefesa)
        pontosDeVida -= danoCausado
    }
}

// 3. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, 
//    o dano causado será igual a metade da diferença entre o ataque e a defesa.

if (escudo==true) {
    if (poderDeAtaque > poderDeDefesa) {
        danoCausado = (poderDeAtaque - poderDeDefesa) / 2
        pontosDeVida -= danoCausado
    }
}

// O programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor
// e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

alert (
    "Resultado Final!\n" +
    "\nDano causado pelo atacante " + danoCausado + " no defensor " + defensor +
    "\nPontos de vida perdidos pelo defensor" + 
    "\n" +
    "\nDados Atualizados do Defensor\n" +
    "\nNome: " + defensor +
    "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa
)