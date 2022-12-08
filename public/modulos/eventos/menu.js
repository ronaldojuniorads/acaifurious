// let evento = {
//     adiciona: (tipo, callback, elemento)=>{
//         elemento.addEventListener(tipo, callback)
//     },
//     remove: (tipo,callback,elemento)=>{
//         elemento.removeEventListener(tipo, callback)
//     }  
// }

// export default evento 

//###MODULO PARA O MENU###

let evento = {
    adiciona: ()=>{
        const elementoMenu = document.querySelector("header nav > div")
        const elementoUl = document.querySelector("header nav ul")
        elementoMenu.addEventListener("click", ()=>{
            if(elementoUl.style.display == "" || elementoUl.style.display == "none"){
                elementoUl.style.display = "flex"
            }else{
                elementoUl.style.display = "none"
            } 
        })
    }
}

export default evento 