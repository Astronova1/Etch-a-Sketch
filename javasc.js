const toAdd = document.createDocumentFragment();

for(let i=0; i<16; i++){
    let grid = document.createElement("div");
    grid.className = 'grid '+ (i+1);
    toAdd.appendChild(grid);
 }

 const cont = document.querySelector("#container");
 cont.appendChild(toAdd);
 cont.style.display = "flex";

 const grids = document.querySelectorAll(".grid");
 grids.forEach(grid => {
    grid.style.border = "2px solid red";
    grid.style["flex: 1 1 0"];
 })