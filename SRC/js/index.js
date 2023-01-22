/*

OBJETIVO 1 - quando o usuario clicar na modal de veja o trailer, devemos abrir modal com o video
     passo 1 - dar um jeito de pegar botao na tela usando js, 
     passo 2 - idetinficar quando o usuario clicar
     passo 3 - dar um jeito de pagar o elemento da modal no js
     passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar modal
     passo 1 - dar um jeito de pegar o elemento de fechar a modal usando js
     passo 2 - dar um jeito de identificar quando o usuario clica no X
     passo 3 - fechar a modal 

*/


const botaoTrailer = document.querySelector(".botao-trailer");

const modal = document.querySelector(".modal");

const video = document.getElementById("video");

const botaoX = document.querySelector(".fechar-modal");

const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.add("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoX.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

// toggle pode ser usado no lugar add/remove



















