// //Exercício 01
// function conversorUnidades() {
//     const medida = parseFloat(prompt("Digite a medida:"));
//     const unidadeOriginal = prompt("Digite a unidade original (km, m, mi, ft):").toLowerCase();
//     const unidadeDestino = prompt("Digite a unidade de destino (km, m, mi, ft):").toLowerCase();

//     let resultado;

//     // Converter para metros primeiro
//     switch (unidadeOriginal) {
//         case "km":
//             resultado = medida * 1000;
//             break;
//         case "m":
//             resultado = medida;
//             break;
//         case "mi":
//             resultado = medida * 1609.34;
//             break;
//         case "ft":
//             resultado = medida * 0.3048;
//             break;
//         default:
//             console.log("Unidade original inválida.");
//             return;
//     }

//     // Converter para a unidade de destino
//     switch (unidadeDestino) {
//         case "km":
//             resultado /= 1000;
//             break;
//         case "m":
//             break;
//         case "mi":
//             resultado /= 1609.34;
//             break;
//         case "ft":
//             resultado /= 0.3048;
//             break;
//         default:
//             console.log("Unidade de destino inválida.");
//             return;
//     }

//     console.log(`${medida} ${unidadeOriginal} = ${resultado.toFixed(2)} ${unidadeDestino}`);
// }

// // Executar a função
// conversorUnidades();


// //Exercício02
// function calculadora() {
//     const num1 = parseFloat(prompt("Digite o primeiro número:"));
//     const num2 = parseFloat(prompt("Digite o segundo número:"));
//     const operacao = prompt("Digite a operação (+, -, *, /, %, raiz, potencia):").toLowerCase();

//     let resultado;

//     switch (operacao) {
//         case "+":
//             resultado = num1 + num2;
//             break;
//         case "-":
//             resultado = num1 - num2;
//             break;
//         case "*":
//             resultado = num1 * num2;
//             break;
//         case "/":
//             if (num2 === 0) {
//                 console.log("Erro: Divisão por zero.");
//                 return;
//             }
//             resultado = num1 / num2;
//             break;
//         case "%":
//             resultado = num1 % num2;
//             break;
//         case "raiz":
//             resultado = Math.sqrt(num1);
//             break;
//         case "potencia":
//             resultado = Math.pow(num1, num2);
//             break;
//         default:
//             console.log("Operação inválida.");
//             return;
//     }

//     console.log(`Resultado: ${resultado}`);
// }

// // Executar a função
// calculadora();


// //Exercício03
// function analisarData() {
//     const dia = parseInt(prompt("Digite o dia:"));
//     const mes = parseInt(prompt("Digite o mês:"));
//     const ano = parseInt(prompt("Digite o ano:"));

//     let diasNoMes;

//     switch (mes) {
//         case 2: // Fevereiro
//             if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
//                 diasNoMes = 29; // Ano bissexto
//             } else {
//                 diasNoMes = 28;
//             }
//             break;
//         case 4: case 6: case 9: case 11: // Abril, Junho, Setembro, Novembro
//             diasNoMes = 30;
//             break;
//         default: // Meses com 31 dias
//             diasNoMes = 31;
//             break;
//     }

//     if (dia < 1 || dia > diasNoMes || mes < 1 || mes > 12) {
//         console.log("Data inválida.");
//     } else {
//         console.log(`O mês ${mes}/${ano} tem ${diasNoMes} dias.`);
//     }
// }

// // Executar a função
// analisarData();


// //Exercício04
// function classificarForma() {
//     const lados = parseInt(prompt("Digite o número de lados da figura:"));

//     switch (lados) {
//         case 3:
//             console.log("Triângulo");
//             break;
//         case 4:
//             console.log("Quadrilátero");
//             break;
//         case 5:
//             console.log("Pentágono");
//             break;
//         case 6:
//             console.log("Hexágono");
//             break;
//         default:
//             console.log("Forma não reconhecida.");
//     }
// }

// // Executar a função
// classificarForma();

// //Exercício05
// function traduzirCor() {
//     const cor = prompt("Digite o nome da cor em português:").toLowerCase();

//     switch (cor) {
//         case "vermelho":
//             console.log("Red");
//             break;
//         case "azul":
//             console.log("Blue");
//             break;
//         case "verde":
//             console.log("Green");
//             break;
//         case "amarelo":
//             console.log("Yellow");
//             break;
//         default:
//             console.log("Cor não reconhecida.");
//     }
// }

// // Executar a função
// traduzirCor();


// //Exercício06
// function menuOpcoes() {
//     const opcao = prompt(`Escolha uma opção:
//     1. Cadastrar
//     2. Editar
//     3. Excluir
//     4. Listar
//     0. Sair`);

//     switch (opcao) {
//         case "1":
//             console.log("Cadastrando...");
//             break;
//         case "2":
//             console.log("Editando...");
//             break;
//         case "3":
//             console.log("Excluindo...");
//             break;
//         case "4":
//             console.log("Listando...");
//             break;
//         case "0":
//             console.log("Saindo...");
//             break;
//         default:
//             console.log("Opção inválida.");
//     }
// }

// // Executar a função
// menuOpcoes();


// //Exercício07
// function avaliarDesempenho() {
//     const conceito = prompt("Digite o conceito (A, B, C, D, F):").toUpperCase();

//     switch (conceito) {
//         case "A":
//             console.log("Excelente");
//             break;
//         case "B":
//             console.log("Bom");
//             break;
//         case "C":
//             console.log("Regular");
//             break;
//         case "D":
//             console.log("Ruim");
//             break;
//         case "F":
//             console.log("Insuficiente");
//             break;
//         default:
//             console.log("Conceito inválido.");
//     }
// }

// // Executar a função
// avaliarDesempenho();


// //Exercício08
// function pedraPapelTesoura() {
//     const jogadaUsuario = prompt("Escolha: pedra, papel ou tesoura:").toLowerCase();
//     const jogadas = ["pedra", "papel", "tesoura"];
//     const jogadaComputador = jogadas[Math.floor(Math.random() * 3)];

//     console.log(`Você escolheu: ${jogadaUsuario}`);
//     console.log(`Computador escolheu: ${jogadaComputador}`);

//     switch (jogadaUsuario) {
//         case "pedra":
//             switch (jogadaComputador) {
//                 case "pedra":
//                     console.log("Empate!");
//                     break;
//                 case "papel":
//                     console.log("Você perdeu!");
//                     break;
//                 case "tesoura":
//                     console.log("Você ganhou!");
//                     break;
//             }
//             break;
//         case "papel":
//             switch (jogadaComputador) {
//                 case "pedra":
//                     console.log("Você ganhou!");
//                     break;
//                 case "papel":
//                     console.log("Empate!");
//                     break;
//                 case "tesoura":
//                     console.log("Você perdeu!");
//                     break;
//             }
//             break;
//         case "tesoura":
//             switch (jogadaComputador) {
//                 case "pedra":
//                     console.log("Você perdeu!");
//                     break;
//                 case "papel":
//                     console.log("Você ganhou!");
//                     break;
//                 case "tesoura":
//                     console.log("Empate!");
//                     break;
//             }
//             break;
//         default:
//             console.log("Jogada inválida.");
//     }
// }

// // Executar a função
// pedraPapelTesoura();


// //Exercício09
// function converterRomano() {
//     const numero = parseInt(prompt("Digite um número entre 1 e 10:"));

//     switch (numero) {
//         case 1:
//             console.log("I");
//             break;
//         case 2:
//             console.log("II");
//             break;
//         case 3:
//             console.log("III");
//             break;
//         case 4:
//             console.log("IV");
//             break;
//         case 5:
//             console.log("V");
//             break;
//         case 6:
//             console.log("VI");
//             break;
//         case 7:
//             console.log("VII");
//             break;
//         case 8:
//             console.log("VIII");
//             break;
//         case 9:
//             console.log("IX");
//             break;
//         case 10:
//             console.log("X");
//             break;
//         default:
//             console.log("Número fora do intervalo.");
//     }
// }

// // Executar a função
// converterRomano();


//Exercício10
function calcularImposto() {
    const tipoProduto = prompt("Digite o tipo de produto (A, B, C):").toUpperCase();
    const valorProduto = parseFloat(prompt("Digite o valor do produto:"));

    let imposto;

    switch (tipoProduto) {
        case "A":
            imposto = valorProduto * 0.1; // 10%
            break;
        case "B":
            imposto = valorProduto * 0.15; // 15%
            break;
        case "C":
            imposto = valorProduto * 0.2; // 20%
            break;
        default:
            console.log("Tipo de produto inválido.");
            return;
    }

    console.log(`Imposto: R$ ${imposto.toFixed(2)}`);
}

// Executar a função
calcularImposto();