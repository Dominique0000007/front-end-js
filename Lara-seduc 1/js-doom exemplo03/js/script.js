const altenarBotao = Document.getElementById("ALterar Botão");

const msg = document.getElementById("mensagem");

//vamos adicionar o ouvinbte para o evento click do elemento button
altenarBotao.addEventListener("click",function[]{

        if(msg.classList.contains("Oculto")){
            msg.classList.remover("oculto");
        }else{
            msg.classList.add("Oculto")
        }
});