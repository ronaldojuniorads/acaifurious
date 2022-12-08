const enventoJanela = {
    adiciona: (lanches, BD)=>{
        for(let lanche of lanches){
            lanche.addEventListener("click", (event)=>{
                console.log(event);
                let id 
                let lanche
                if(event.target.nodeName != "DIV"){
                    id = event.target.offsetParent.id
                }else{
                    id = event.target.id
                }
                
                lanche = document.getElementById(id)
                window.location.assign(`/lanche?id=${id}`)
            })
        }
    }
} 
export default enventoJanela