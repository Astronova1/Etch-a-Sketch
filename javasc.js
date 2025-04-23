const toAdd = document.createDocumentFragment();

for(let i=0; i<16; i++){
    let grid = document.createElement("div");
    grid.className = 'grid '+ (i+1);
    toAdd.appendChild(grid);
 }

 const body = document.querySelector("body");
   body.setAttribute("style","display:flex");

 const cont = document.createElement("container");
 body.appendChild(cont);
 cont.appendChild(toAdd);


 const grids = document.querySelectorAll(".grid");
 grids.forEach(grid => {
   grid.setAttribute("style","width: 50px; height: 20px; border:2px solid red")
 })