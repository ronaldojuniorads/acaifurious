const express = require("express")
const ejs = require("ejs")
const BD = require("./banco_de_dados/script.js")
const BDCarrinho = require("./banco_de_dados/carrinho.js")
console.log(BDCarrinho);
const server = express()
server.use(express.static("public"))
server.set("views engine", "ejs")
let lanche
server.get("/", (requisicao, resposta)=>{
    resposta.render("pages/index.ejs", {BD: BD, BDCarrinho: BDCarrinho})
})
server.get("/lanche", (requisicao, resposta)=>{
    let lanche
    let query = requisicao.query.id
    console.log(requisicao);

    for(let linha of BD){
        for(let coluna of linha){
            if(coluna.id == query){
                console.log(coluna);
                lanche = coluna
            }
        }
    }
    resposta.render("pages/lanche.ejs", {lanche: lanche, BDCarrinho: BDCarrinho})

    console.log(requisicao.query.id);
})
server.listen(8080)


console.log("servidor rodando");

//1- exibir os lanches disponiveis
    //percorrer banco de dados e pra cada dado criar front
//2- quando um lanche for clicado, exibir suas variacoes
    //no passo 1, definir a criacao de uma janela especifica para cada lanche especifica, quando um lanche for clicado, a sua janela sera exibida

//3- criar o front do carrinho
//4- receber no front dados do back, ou seja do banco de dadis carrinho
