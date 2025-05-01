let gridSize = 16;
let containerWidth = 600;
let containerHeight = 400;

function createDivs(column) {
   const toAdd = document.createDocumentFragment();
   let squareSize = containerHeight / gridSize;
   for(let i = 0; i < gridSize; i++){
      const square = document.createElement("div");
      square.classList.add('grid');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      square.style.border = "1px solid gray";

      toAdd.appendChild(square);
   }
   return toAdd;
}

function createVerticalDivs() {
    const toAddNew = document.createDocumentFragment();
    const columnWidth = containerHeight / gridSize;
    
    for(let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.add('cont');
        column.style.width = `${columnWidth}px`;
        column.style.display = "flex";
        column.style.flexDirection = "column";
        column.style.flexShrink = "0";
        toAddNew.appendChild(column);
        column.appendChild(createDivs(column));
    }
    mainSel.innerHTML = "";
    mainSel.appendChild(toAddNew);
}

const body = document.querySelector("body");
body.setAttribute("style", "display:flex; padding: 0px; flex-direction: column; width: 100%; height: 100vh");

const btn = document.createElement("button");
body.appendChild(btn);
btn.innerText = "Custom Grid Size";
btn.setAttribute("style", "width:150px; height:20px; margin-bottom: 10px; margin-left: 10px; overflow: hidden; font-size: 12px");

const main = document.createElement("div");
main.classList.add("main");
main.setAttribute("style", `
    display: flex;
    border: 0px solid blue;
    margin: 20px;
    height: ${containerHeight}px;
    width: ${containerWidth}px;
    overflow: hidden;
`);
body.appendChild(main);

const mainSel = document.querySelector(".main");
createVerticalDivs();

btn.addEventListener("click", () => {
    gridSize = parseInt(prompt("Enter the number of Grids (Maximum 100)"));
    if (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
        alert("Please enter valid number between 1 and 100");
    } else {
        clearBox(".main");
        createVerticalDivs();
        addHoverEffect();
    }
});

function addHoverEffect() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "rgb(" + r() + "," + r() + "," + r() + ")";    
        });
    });
}

function r() {
    return Math.floor(Math.random() * 255);
}

function clearBox(elementID) {
    document.querySelector(elementID).innerHTML = "";
}

addHoverEffect();