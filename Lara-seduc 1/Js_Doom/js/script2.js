//1. Selecionar o elemento com o id "container"
const container = document.getElementById("container");

// 2. Criar uma div interna - dentro da div = "container"
const divInterna = document.createElement("div");

// 3. Criar dois elementos h1 com seus respectivos textos
const h3Nome = document.createElement("h1");
h3Nome.textContent = "Nome:";

// 4. Criar o elemento p para o preço
const pPreco = document.createElement("p");
pPreco.textContent = "Preço:";

// 5. Criar o elemento p para Disponível
const pDisponivel = document.createElement("p");
pDisponivel.textContent = "Disponível";


divInterna.appendChild(h3Nome);
divInterna.appendChild(pPreco);
divInterna.appendChild(pDisponivel);
container.appendChild(divInterna);
