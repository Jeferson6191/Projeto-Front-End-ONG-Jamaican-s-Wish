let botao = document.querySelector(".convite")
let projetobtn = document.querySelector("#projetosconvite")

//enviar o usuario para a pagina de cadastro
botao.addEventListener("click", ()=>{
    window.location.href = 'cadastro.html';
})

projetobtn.addEventListener("click", ()=>{
    window.location.href = 'projetos.html';
})