//Exercício 01

// let nota = prompt("Digite a nota do aluno:");
// nota = parseFloat(nota);

// if (nota >= 7) {
//   console.log("Aprovado");
// } else if (nota >= 5) {
//   console.log("Recuperação");
// } else {
//   console.log("Reprovado");
// }

// //Exercício 02

// let numero = prompt("Digite um número de 1 a 12:");
// numero = parseInt(numero);

// switch (numero) {
//     case 1:
//     console.log("Janeiro");
//     break;

//   case 2:
//     console.log("Fevereiro");
//     break;

//   case 3:
//     console.log("Março");
//     break;
//   case 4:
//     console.log("Abril");
//     break;

//   case 5:
//     console.log("Maio");
//     break;

//   case 6:
//     console.log("Junho");
//     break;

//   case 7:
//     console.log("Julho");
//     break;

//   case 8:
//     console.log("Agosto");
//     break;

//   case 9:
//     console.log("Setembro");
//     break;

//   case 10:
//     console.log("Outubro");
//     break;

//   case 11:
//     console.log("Novembro");
//     break;

//   case 12:
//     console.log("Dezembro");
//     break;
    
//   default:
//     console.log("Número inválido");
// }

// //Exercício 03

let usuarioLogado = prompt("Digite o tipo de usuário (adm, usuario, visitante ou null se não logado):");

if (usuarioLogado === "adm") {
  console.log("Acesso concedido");
} 
  else if (usuarioLogado === "usuario") {
  console.log("Acesso concedido");
} 
  else if (usuarioLogado === "visitante") {
  console.log("Acesso concedido");
} 
  else if (usuarioLogado === null) {
  console.log("Acesso negado, por favor logue na sua conta");
} 
  else {
  console.log("Tipo de usuário inválido");
}

function exemploConst() {
  alert("");
}