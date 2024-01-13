const grids = document.getElementById("grids")
for(let i=1;i<=256;i++){
    let div = document.createElement("div")
    div.style.width = "25px"
    div.style.height = "25px"
    div.style.border = "1px solid black"
    div.classList.add("box")
    grids.appendChild(div)
}

grids.style.width = "435px"
grids.style.height = "430px"
grids.style.display = "flex"
grids.style.flexWrap = "wrap"

const main = document.getElementById("main").style
main.height = "700px"
main.display = "flex"
main.justifyContent = "center"
main.alignItems = "center"

const bigContainer=document.querySelector("#grids")

bigContainer.addEventListener('mouseover', () =>{
    let target = e.target

    if(target !== bigContainer){
        target.classList.remove('box')
        target.classList.add('permahover')
    }
    
})
