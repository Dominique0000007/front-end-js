// Vamos pegar o elemento com id = lista
const list = document.getElementById("lista"); // Corrigido para "lista"

// Vamos pegar o elemento input com id = novoItem
const novoItemInput = document.getElementById("novoItem"); // Corrigido para "novoItem"

// Vamos adicionar um evento button com id = button
const btnAdicionar = document.getElementById("button");

// Vamos adicionar um ouvinte de evento do tipo click
btnAdicionar.addEventListener("mouse over", function () {
    // Vamos ler o texto do novo produto a ser adicionado na lista
    const novoItemText = novoItemInput.value; // Corrigido para "novoItemInput"

    if (novoItemText !== "") {
        // Vamos adicionar um novo elemento li
        const novoItemElement = document.createElement("li");

        // Vamos adicionar um texto ao novo elemento li
        novoItemElement.textContent = novoItemText;

        // Vamos adicionar o li com o texto ao elemento lista
        list.appendChild(novoItemElement);

        // Vamos limpar o elemento input
        novoItemInput.value = "";
    }
});