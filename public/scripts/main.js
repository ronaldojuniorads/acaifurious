import evento from "../modulos/eventos/menu.js";
import enventoJanela from "../modulos/eventos/evento_janela.js";
import slide from "../modulos/eventos/eventoSlide.js"
//menu do site
evento.adiciona() 

//main

let lanches = document.querySelectorAll("main div.lanche")
enventoJanela.adiciona(lanches)

//lanche page

let arrows = document.querySelectorAll("div.arrow")
console.log(arrows);
arrows.forEach((arrow)=>{
    arrow.addEventListener("click", ()=>{
        slide(arrow.classList[1])
    })
})


