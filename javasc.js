

function createDivs(app){
   const toAdd = document.createDocumentFragment();
   for(let i=0; i<16; i++){
      app = document.createElement("div");
      app.className = 'grid '+ (i+1);
      toAdd.appendChild(app);
   }
   return toAdd;
}

function createVerticalDivs(con){
   const toAddMain = document.createDocumentFragment();
   for(let i=0; i<16 ; i++){
      con = document.createElement("cont");
      con.className = 'cont' + (i+1);
      toAddMain.appendChild(con);
      main.appendChild(con);
      con.appendChild(createDivs(con));
   }
}

 const body = document.querySelector("body");
   body.setAttribute("style","display:flex;");

const main = document.createElement("main");
   main.setAttribute("style","display:flex; border:2px solid blue; flex-direction: column");
   body.appendChild(main);

 createVerticalDivs("cont");

 const grids = document.querySelectorAll(".grid");
 grids.forEach(grid => {
   grid.setAttribute("style","width: 50px; height: 20px; border:2px solid red")
 })