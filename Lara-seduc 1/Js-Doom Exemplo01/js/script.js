//vamos pegar o elemnto de texto h1
const elementTitle = document.getElementById("title");

//vamos pegar o elemnto button
const elementButton = document.getElementById("button")

//Agora vamos adicionar um manipulador de eventos no js
elementButton.addEventListener("click", function(){
 //vamos mudar o texto do elemento h1-elementoTitulo
 elementTitle.textContent= "Texto alterado";
});
