do {
    opcao = prompt(
        "Calculadora Geométrica.\n\nEscolha uma opção de cálculo.\n1. área do triângulo.\n2. área do retângulo.\n3. área do quadrado\n4. área do trapézio.\n5. área do círculo.\n6. sair."
    );
    
    switch (opcao) {
        case "1":
            calculadoraGeometrica(opcao);
            break;
        case "2":
            calculadoraGeometrica(opcao);
            break;
        case "3":
            calculadoraGeometrica(opcao);
            break;
        case "4":
            calculadoraGeometrica(opcao);
            break;
        case "5":
            calculadoraGeometrica(opcao);
            break;
        case "6":
            alert("Encerrando a calculadora.");
            break;
        default:
            alert("Opção inválida!");
    }
} while (opcao !== "6");

function calculadoraGeometrica(opcao) {
    switch (opcao) {
        case "1":
            alert("Opção escolhida 1. área do triângulo.");
            var base = parseFloat(prompt("Informe a base do triângulo:"));
            var altura = parseFloat(prompt("Informe a altura do triângulo:"));
            var areaDoTriangulo = (base * altura) / 2;
            alert("Calculando...");
            alert("Área do triângulo = " + areaDoTriangulo);
            break;
        case "2":
            alert("Opção escolhida 2. área do retângulo.");
            var base = parseFloat(prompt("Informe a base do retângulo:"));
            var altura = parseFloat(prompt("Informe a altura do retângulo:"));
            var areaDoRetangulo = base * altura;
            alert("Calculando...");
            alert("Área do retângulo = " + areaDoRetangulo);
            break;
        case "3":
            alert("Opção escolhida 3. área do quadrado.");
            var lado = parseFloat(prompt("Informe o lado do quadrado:"));
            var areaDoQuadrado = lado * lado;
            alert("Calculando...");
            alert("Área do quadrado = " + areaDoQuadrado);
            break;
        case "4":
            alert("Opção escolhida 4. área do trapézio.");
            var baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
            var baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
            var altura = parseFloat(prompt("Informe a altura do trapézio:"));
            var areaDoTrapezio = ((baseMaior + baseMenor) * altura) / 2;
            alert("Calculando...");
            alert("Área do trapézio = " + areaDoTrapezio);
            break;
        case "5":
            alert("Opção escolhida 5. área do círculo.");
            var raio = parseFloat(prompt("Informe o raio do círculo:"));
            var areaDoCirculo = 3.14 * (raio * raio);
            alert("Calculando...");
            alert("Área do círculo = " + areaDoCirculo);
            break;
        default:
            alert("Opção inválida!");
    }
}