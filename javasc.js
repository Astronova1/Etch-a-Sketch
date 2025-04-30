
let gridSize = 16;

function createDivs(app){
   const toAdd = document.createDocumentFragment();
   for(let i=0; i<gridSize; i++){
      app = document.createElement("div");
      app.classList.add ('grid');
      toAdd.appendChild(app);
   }
   return toAdd;
}

function createVerticalDivs(){

    const toAddNew = document.createDocumentFragment();
   for(let i=0; i<gridSize ; i++){
      con = document.createElement("div");
      con.classList.add('cont');
      toAddNew.appendChild(con);
      mainSel.appendChild(con);
      con.appendChild(createDivs(con));
   }
}

 const body = document.querySelector("body");
   body.setAttribute("style","display:flex; padding: 0px;flex-direction: column; width: 100%; height: 100vh");

   const btn = document.createElement("button");
   body.appendChild(btn);
  btn.innerText = "Custom Grid Size";
   btn.setAttribute("style","width:150px;height:20px; margin-bottom: 10px; margin-left: 10px;overflow: hidden; font-size: 12px ");


const main = document.createElement("div");
    main.classList.add("main");
   main.setAttribute("style","display:flex; border:0px solid blue; flex: 0 0 auto; margin: 0px;justify-content: center;height:400px; width:600px; max-width: 600px; min-width: 600px;min-height: 400px; max-height: 400px;");
   body.appendChild(main);

    const mainSel = document.querySelector(".main");

   createVerticalDivs();


   btn.addEventListener("click" , () => {
    gridSize = parseInt(prompt("Enter the number of Grids (Maximum 100)"));
    if (gridSize > 100 || gridSize < 1){
        alert("Please enter valid number between 1 and 100");
    }
    else{
      console.log(gridSize);
      createVerticalDivs();
    }
  })
   


 const conts = document.querySelectorAll(".cont");
 conts.forEach(cont => {
   cont.setAttribute("style","display: flex; flex-direction: column; margin: 0px; border: 0px; padding: 0px;;flex: 0 0 0; border: 1px solid blue;");
 })


 const grids = document.querySelectorAll(".grid");
 grids.forEach(grid => {
   grid.setAttribute("style","width:80px; height:50px;border:1px solid gray; flex: 1 1 auto; display: flex");
 });

 grids.forEach(grid => {
   grid.addEventListener("mouseover", () => {
   grid.style.backgroundColor = "rgb(" + r() + "," + r() + "," + r() + ")";    
 })

 });



 function r(){
   return Math.floor(Math.random() * 255);
 }

 function clearBox(elementID){
  document.querySelector(elementID).textContent = " ";
 }