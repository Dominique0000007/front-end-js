// 1. Seleciona o elemento com o id "container"
const container = document.getElementById("container"); // Corrigido "getElementByid"

// 2. Cria uma div interna - dentro da div = "container"
const divInterna = document.createElement("div");

// 3. Cria dois elementos p com seus respectivos textos
const paragrafo1 = document.createElement("p");
paragrafo1.textContent = "Este é o primeiro parágrafo";

const paragrafo2 = document.createElement("p");
paragrafo2.textContent = "Este é o segundo parágrafo";

// 4. Adiciona a classe CSS aos parágrafos - método classList
paragrafo1.classList.add("paragrafo-estilizado"); // Corrigido "calssList"
paragrafo2.classList.add("paragrafo-estilizado");

// 5. Adiciona os elementos à div interna "div"
divInterna.appendChild(paragrafo1);
divInterna.appendChild(paragrafo2);

// 6. Adiciona a div interna ao container
container.appendChild(divInterna);