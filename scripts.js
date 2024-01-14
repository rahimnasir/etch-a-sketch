const grids = document.getElementById("grids")

function addPermanentHover(element) {
    element.classList.add('permanent-hover-active');
  }

document.addEventListener('DOMContentLoaded', function() {
    // Create multiple div elements dynamically using DOM manipulation
    for (let i = 1; i <= 256; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('permanent-hover');
        newDiv.style.width = "25px"
        newDiv.style.height = "25px"
        newDiv.style.border = "1px solid black"
        // Add the new div to the body
        document.body.appendChild(newDiv);

        // Add the permanent hover effect to the newly created div
        addPermanentHover(newDiv);
}
});
for(let i=1;i<=256;i++){
    let div = document.createElement("div")
    div.style.width = "25px"
    div.style.height = "25px"
    div.style.border = "1px solid black"
    div.classList.add("box")
    grids.appendChild(div)
    addPermanentHover(div);
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

