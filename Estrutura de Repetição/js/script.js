//Nível_Fácil(5 Questões);

// //Questão01;
// for (let i = 1; i < 11; i++) {
//    alert(i); // Imprime os números de 1 a 10
// }

// //Questão02;
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// //Questão03;
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// //Questão04;
// let soma = 0;
// for (let i = 1; i <= 5; i++) {
//     soma += i;
// }
// console.log(soma); // Resultado: 15

// //Questão05;
// for (let i = 3; i <= 15; i += 3) {
//     console.log(i);
// }

// //Nivel_Medio(10 Questões);

// //Questão01
// var numero = parseInt(prompt("Digite um número para ver a tabuada:"));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }

// //Questão02
// var soma = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     soma += i;
//   }
// }

// console.log("A soma dos números ímpares de 1 a 100 é: " + soma);

// //Questão03
// let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
// let fatorial = 1;

// for (let i = 1; i <= numero; i++) {
//   fatorial *= i;
// }

// console.log(`O fatorial de ${numero} é: ${fatorial}`);


// //Questão04
// let a = 0, b = 1;
// let i = 0;

// while (i < 10) {
//   console.log(a);
//   let temp = a + b;
//   a = b;
//   b = temp;
//   i++;
// }


// //Questão05
// let maior = -Infinity; // Inicializa com o menor valor possível
// for (let i = 0; i < 5; i++) {
//   let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
//   if (numero > maior) {
//     maior = numero;
//   }
// }
// console.log("O maior número digitado foi: " + maior);


// //Questão06
// var palavra = prompt("Digite uma palavra:");
// let contador = 0;
// palavra = palavra.toLowerCase(); // Converter para minúsculas para facilitar a comparação
// for (let i = 0; i < palavra.length; i++) {
//   let letra = palavra[i];
//   if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//     contador++;
//   }
// }
// console.log("A palavra contém " + contador + " vogais.");


// //Questão07
// let palavra = prompt("Digite uma palavra:");
// let palavraInvertida = "";
// for (let i = palavra.length - 1; i >= 0; i--) {
//   palavraInvertida += palavra[i];
// }
// console.log("A palavra invertida é: " + palavraInvertida);


// //Questão08
// for (let numero = 2; numero <= 20; numero++) {
//     let ehPrimo = true;
//     for (let divisor = 2; divisor < numero; divisor++) {
//       if (numero % divisor === 0) {
//         ehPrimo = false;
//         break;
//       }
//     }
//     if (ehPrimo) {
//       console.log(numero + " é primo");
//     }
//   }
  

// //Questão09
// let soma = 0;
// for (let i = 0; i < 3; i++) {
//   let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
//   soma += nota;
// }
// let media = soma / 3;
// console.log("A média das notas é: " + media);


// //Questão10
// let altura = parseInt(prompt("Digite a altura da pirâmide:"));

// for (let i = 1; i <= altura; i++) {
//   let linha = "";
//   // Adicionar espaços em branco à esquerda
//   for (let j = 1; j <= altura - i; j++) {
//     linha += " ";
//   }
//   // Adicionar asteriscos
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     linha += "*";
//   }
//   console.log(linha);
// }

//Questão10
