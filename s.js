let obj = {
    a:"oi", 
    b: "tudo bem?"
} 
let {a:saudacao, b:pergunta} = obj
console.log(saudacao, pergunta);

let r = [1,3]

let c,f

({c,f} = {c: 8,f:9})
console.log(c,f);