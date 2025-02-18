const container = document.getElementById("container");

const divInterna = document.createElement("div");

const p1 = document.createElement("p");
p1.textContent = "Escola SENAI";

const p2 = document.createElement("p");
p2.textContent = "Suiço Brasileira";

const p3 = document.createElement("p");
p3.textContent = "Escola SENAI Suiço Brasileira";


divInterna.appendChild(p3);
container.appendChild(divInterna);
