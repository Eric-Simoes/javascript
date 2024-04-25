let medida = parseFloat(prompt("Digite o valor da medida em metros: "))
const opcao = prompt("Digite qual dos valores de medida abaixo você gostaria de verificar: \n a)mm \n b)cm \n c)dm \n d)dam \n e)hm \n f)km")


switch (opcao) {
    case "mm" :
        medida *= 1000  
        alert("O resultado da coversão foi: " + medida + "mm")
        break

    case "cm" :
        medida *= 100
        alert("O resultado da coversão foi: " + medida + "cm") 
        break

    case "dm" :
        medida *= 10
        alert("O resultado da coversão foi: " + medida + "dm")
        break

    case "dam" :
        medida /= 10
        alert("O resultado da coversão foi: " + medida + "amm") 
        break

    case "hm" :
        medida /= 100
        alert("O resultado da coversão foi: " + medida + "hm") 
        break

    case "km" :
        medida /= 1000
        alert("O resultado da coversão foi: " + medida + "km") 
        break

    default :
        alert("Opção invalida, tente novamente!")
}