const slide = (btn)=>{
    let divSlide = document.querySelector("main div.variacoes div.container-slide")
let qtdVariacoes = divSlide.children.length //quantidade de variacoes
let tmDivSlide = divSlide.clientWidth // tamanho do container que recebe as variacoes

// clientWidth / 400px == quantidade de varicaoes que cabem no espaço * 420 tamanho completo de cada variacao
let tmVariacao = document.querySelector("main div.variacoes div.container-slide div.variacao").clientWidth

let qtdCabiveis = tmDivSlide/tmVariacao //quantas variacoes de tamanho 400px cabem no container > tmDivSlide/400

let tmMargin = qtdCabiveis*tmVariacao // tamanho da margim nescessaria para enquadrar as variacoes > qtdCabiveis*tamanho de cada variacao
console.log(tmDivSlide, "tm container");
console.log(qtdCabiveis, "cabem");
console.log(tmVariacao, "tm variacao");
console.log(tmMargin, "tm margim");
let limite = qtdVariacoes*tmVariacao // limite da margim, que é o tamanho total nescessario pra todas as variacoes existentes serem exibidas > qtdVariacoes/tamanho de cada variacao


let marginRightAtual = Number(divSlide.style.marginRight.replace("px", ""))
console.log(marginA);
function next(){
    if(!(marginRightAtual >= limite | qtdVariacoes <= qtdCabiveis)){
        divSlide.style.marginRight = `${marginRightAtual+tmMargin}px`
    }
}
function previous(){
    if(!(marginRightAtual <= 0  | qtdVariacoes <= qtdCabiveis)){
        divSlide.style.marginRight = `${marginRightAtual-tmMargin}px`
    } 
}
btn === "next" ? next() : previous()
}
export default slide