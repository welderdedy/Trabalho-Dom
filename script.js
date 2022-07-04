const [texto,senha] = document.querySelectorAll("input");
console.log(texto,senha)


const botão = document.querySelector("button");
console.log(botão)

const imagem = document.querySelector(".league");
console.log(imagem)
 

function modelo (){

    if(texto.value && senha.value.length >=8){
        botão.removeAttribute("disabled");
        imagem.classList.add("ativo");
        
    }
    else{
        botão.setAttribute("disabled","disabled");
        imagem.classList.remove("ativo");

    }

}

senha.addEventListener("input",modelo);
texto.addEventListener("input",modelo);



