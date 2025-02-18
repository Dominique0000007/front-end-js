// //Exercício01

// function calcularIMC() {
//     // Entrada de dados
//     const peso = parseFloat(prompt("Digite seu peso (kg):"));
//     const altura = parseFloat(prompt("Digite sua altura (m):"));
//     const idade = parseInt(prompt("Digite sua idade:"));

//     // Cálculo do IMC
//     const imc = peso / (altura * altura);

//     // Ajuste do IMC com base na idade
//     let imcAjustado = imc;
//     if (idade > 65) {
//         imcAjustado -= 1; // Reduz 1 ponto do IMC
//     } else if (idade < 18) {
//         imcAjustado += 0.5; // Aumenta a rigidez da classificação
//     }

//     // Classificação do IMC
//     let classificacao;
//     if (imcAjustado < 18.5) {
//         classificacao = "Abaixo do Peso";
//     } else if (imcAjustado < 24.9) {
//         classificacao = "Normal";
//     } else if (imcAjustado < 29.9) {
//         classificacao = "Sobrepeso";
//     } else if (imcAjustado < 34.9) {
//         classificacao = "Obesidade I";
//     } else if (imcAjustado < 39.9) {
//         classificacao = "Obesidade II";
//     } else {
//         classificacao = "Obesidade III";
//     }

//     // Exibir resultado
//     console.log(`Seu IMC é: ${imc.toFixed(2)}`);
//     console.log(`Classificação: ${classificacao}`);
// }

// // Executar a função
// calcularIMC();

// //Exercício02
// function calcularPontuacao() {
//     // Entrada de dados
//     const nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
//     const nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));
//     const nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10):"));

//     // Verificar se alguma nota é 0
//     if (nota1 === 0 || nota2 === 0 || nota3 === 0) {
//         console.log("Desqualificado");
//         return;
//     }

//     // Cálculo da média ponderada
//     const media = (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;

//     // Classificação
//     let classificacao;
//     if (media >= 9) {
//         classificacao = "Excelente";
//     } else if (media >= 7) {
//         classificacao = "Bom";
//     } else if (media >= 5) {
//         classificacao = "Regular";
//     } else {
//         classificacao = "Ruim";
//     }

//     // Exibir resultado
//     console.log(`Média: ${media.toFixed(2)}`);
//     console.log(`Classificação: ${classificacao}`);
// }

// // Executar a função
// calcularPontuacao();

// //Exercício03

// function validarSenha() {
//     const senha = prompt("Digite sua senha:");

//     // Critérios de validação
//     const temMinimo8Caracteres = senha.length >= 8;
//     const temMaiuscula = /[A-Z]/.test(senha);
//     const temMinuscula = /[a-z]/.test(senha);
//     const temNumero = /[0-9]/.test(senha);
//     const temEspecial = /[!@#$%^&*]/.test(senha);

//     // Verificação
//     if (!temMinimo8Caracteres) {
//         console.log("A senha deve ter pelo menos 8 caracteres.");
//     }
//     if (!temMaiuscula) {
//         console.log("A senha deve ter pelo menos 1 letra maiúscula.");
//     }
//     if (!temMinuscula) {
//         console.log("A senha deve ter pelo menos 1 letra minúscula.");
//     }
//     if (!temNumero) {
//         console.log("A senha deve ter pelo menos 1 número.");
//     }
//     if (!temEspecial) {
//         console.log("A senha deve ter pelo menos 1 caractere especial (!@#$%^&*).");
//     }

//     // Se todos os critérios forem atendidos
//     if (temMinimo8Caracteres && temMaiuscula && temMinuscula && temNumero && temEspecial) {
//         console.log("Senha válida!");
//     }
// }

// // Executar a função
// validarSenha();


// //Exercício04
// function analisarTriangulo() {
//     // Entrada de dados
//     const lado1 = parseFloat(prompt("Digite o primeiro lado:"));
//     const lado2 = parseFloat(prompt("Digite o segundo lado:"));
//     const lado3 = parseFloat(prompt("Digite o terceiro lado:"));

//     // Verificar se é um triângulo válido
//     if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
//         console.log("É um triângulo válido.");

//         // Classificação
//         if (lado1 === lado2 && lado2 === lado3) {
//             console.log("Triângulo Equilátero.");
//         } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//             console.log("Triângulo Isósceles.");
//         } else {
//             console.log("Triângulo Escaleno.");
//         }
//     } else {
//         console.log("Não é um triângulo válido.");
//     }
// }

// // Executar a função
// analisarTriangulo();

// //Exercício05
// function caixaEletronico() {
//     let saldo = 1000; // Saldo inicial

//     // Menu de operações
//     const operacao = prompt("Escolha uma operação: saque, depósito ou consulta");

//     if (operacao === "saque") {
//         const valorSaque = parseFloat(prompt("Digite o valor do saque:"));
//         if (valorSaque <= saldo) {
//             saldo -= valorSaque;
//             console.log(`Saque realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
//         } else {
//             console.log("Saldo insuficiente.");
//         }
//     } else if (operacao === "depósito") {
//         const valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
//         saldo += valorDeposito;
//         console.log(`Depósito realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
//     } else if (operacao === "consulta") {
//         console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
//     } else {
//         console.log("Operação inválida.");
//     }
// }

// // Executar a função
// caixaEletronico();

// //Exercício06

// function reservarVoo() {
//     // Limites de assentos por classe
//     const assentosEconomica = 50;
//     const assentosExecutiva = 20;
//     const assentosPrimeiraClasse = 10;

//     // Entrada de dados
//     const classe = prompt("Escolha a classe (econômica, executiva, primeira classe):").toLowerCase();
//     const passageiros = parseInt(prompt("Digite o número de passageiros:"));
//     const assentosProximos = prompt("Precisa de assentos próximos? (sim/não)").toLowerCase() === "sim";

//     // Verificar disponibilidade
//     let assentosDisponiveis;
//     if (classe === "econômica") {
//         assentosDisponiveis = assentosEconomica;
//     } else if (classe === "executiva") {
//         assentosDisponiveis = assentosExecutiva;
//     } else if (classe === "primeira classe") {
//         assentosDisponiveis = assentosPrimeiraClasse;
//     } else {
//         console.log("Classe inválida.");
//         return;
//     }

//     // Verificar se há assentos suficientes
//     if (passageiros > assentosDisponiveis) {
//         console.log("Não há assentos suficientes nesta classe.");
//         return;
//     }

//     // Verificar assentos próximos
//     if (assentosProximos && passageiros > 1) {
//         console.log("Verificando disponibilidade de assentos próximos...");
//         // Lógica para verificar assentos adjacentes (simulação)
//         if (passageiros > 5) {
//             console.log("Não há assentos próximos suficientes.");
//             return;
//         }
//     }

//     // Confirmar reserva
//     console.log(`Reserva confirmada para ${passageiros} passageiros na classe ${classe}.`);
// }

// // Executar a função
// reservarVoo();

// //Exercício07
// function calcularJurosCompostos() {
//     // Entrada de dados
//     const capital = parseFloat(prompt("Digite o capital inicial:"));
//     const taxaAnual = parseFloat(prompt("Digite a taxa de juros anual (%):"));
//     const tempo = parseFloat(prompt("Digite o tempo em anos:"));
//     const frequencia = prompt("Digite a frequência de capitalização (anual, mensal, diária):").toLowerCase();

//     // Converter taxa para decimal
//     const taxaDecimal = taxaAnual / 100;

//     // Calcular número de períodos
//     let n;
//     if (frequencia === "anual") {
//         n = 1;
//     } else if (frequencia === "mensal") {
//         n = 12;
//     } else if (frequencia === "diária") {
//         n = 365;
//     } else {
//         console.log("Frequência inválida.");
//         return;
//     }

//     // Fórmula de juros compostos
//     const montante = capital * Math.pow(1 + taxaDecimal / n, n * tempo);
//     const lucro = montante - capital;

//     // Exibir resultado
//     console.log(`Montante final: R$ ${montante.toFixed(2)}`);
//     console.log(`Lucro: R$ ${lucro.toFixed(2)}`);
// }

// // Executar a função
// calcularJurosCompostos();

// //Exercício08
// function jogoAdivinhacao() {
//     const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//     let tentativas = 7;

//     while (tentativas > 0) {
//         const palpite = parseInt(prompt(`Digite um número entre 1 e 100 (${tentativas} tentativas restantes):`));

//         if (palpite === numeroAleatorio) {
//             console.log("Parabéns! Você acertou!");
//             return;
//         } else if (palpite < numeroAleatorio) {
//             console.log("Muito baixo.");
//         } else {
//             console.log("Muito alto.");
//         }

//         // Dicas de "Quente" ou "Frio"
//         const diferenca = Math.abs(palpite - numeroAleatorio);
//         if (diferenca < 10) {
//             console.log("Quente!");
//         } else if (diferenca > 20) {
//             console.log("Frio!");
//         }

//         tentativas--;
//     }

//     console.log(`Suas tentativas acabaram. O número era ${numeroAleatorio}.`);
// }

// // Executar a função
// jogoAdivinhacao();

// //Exercício09
// function recomendarFilme() {
//     // Lista de filmes
//     const filmes = [
//         { titulo: "Matrix", genero: "ação", ano: 1999, ator: "Keanu Reeves" },
//         { titulo: "Vingadores", genero: "ação", ano: 2012, ator: "Robert Downey Jr." },
//         { titulo: "Toy Story", genero: "animação", ano: 1995, ator: "Tom Hanks" },
//         { titulo: "Interestelar", genero: "ficção científica", ano: 2014, ator: "Matthew McConaughey" },
//     ];

//     // Entrada de dados
//     const genero = prompt("Digite o gênero preferido (ação, animação, ficção científica):").toLowerCase();
//     const ano = prompt("Digite o ano de lançamento (antes ou depois de 2010):").toLowerCase();
//     const ator = prompt("Digite o nome de um ator favorito (opcional):").toLowerCase();

//     // Filtrar filmes
//     const recomendados = filmes.filter(filme => {
//         const matchGenero = filme.genero === genero;
//         const matchAno = (ano === "antes" && filme.ano < 2010) || (ano === "depois" && filme.ano >= 2010);
//         const matchAtor = ator ? filme.ator.toLowerCase().includes(ator) : true;
//         return matchGenero && matchAno && matchAtor;
//     });

//     // Exibir resultado
//     if (recomendados.length > 0) {
//         console.log("Filme recomendado:", recomendados[0].titulo);
//     } else {
//         console.log("Nenhum filme encontrado com essas preferências.");
//     }
// }

// // Executar a função
// recomendarFilme();

//Exercício10
function avaliarCodigo() {
    const codigo = prompt("Cole seu código aqui:");

    // Critérios
    const temVariavel = /(let|const|var)\s+\w+/.test(codigo);
    const temLoop = /(for|while)\s*\(/.test(codigo);
    const temCondicional = /if\s*\(/.test(codigo);
    const temFuncao = /function\s+\w+/.test(codigo);

    // Feedback
    console.log(temVariavel ? "Tem declaração de variável." : "Falta declaração de variável.");
    console.log(temLoop ? "Tem loop." : "Falta loop.");
    console.log(temCondicional ? "Tem condicional." : "Falta condicional.");
    console.log(temFuncao ? "Tem função." : "Falta função.");

    // Avaliação final
    const criteriosAtendidos = [temVariavel, temLoop, temCondicional, temFuncao].filter(Boolean).length;
    if (criteriosAtendidos === 4) {
        console.log("Avaliação: Bom");
    } else if (criteriosAtendidos >= 2) {
        console.log("Avaliação: Regular");
    } else {
        console.log("Avaliação: Ruim");
    }
}

// Executar a função
avaliarCodigo();