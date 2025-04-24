

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
      con = document.createElement("div");
      con.className = 'cont ' + (i+1);
      toAddMain.appendChild(con);
      main.appendChild(con);
      con.appendChild(createDivs(con));
   }
}

 const body = document.querySelector("body");
   body.setAttribute("style","display:flex;");

const main = document.createElement("main");
   main.setAttribute("style","display:flex; border:2px solid blue; flex: 1; margin:0px");
   body.appendChild(main);

 createVerticalDivs("cont");

 const conts = document.querySelectorAll(".cont");
 conts.forEach(cont => {
   cont.setAttribute("style","display: flex; flex-direction: column; margin: 0px; border: 0px ; padding: 0px ;flex: 1 1 auto; border: 2px solid yellow");
 })


 const grids = document.querySelectorAll(".grid");
 grids.forEach(grid => {
   grid.setAttribute("style","width:80px; height:40px;border:2px solid red; flex: 1 1 auto");
 });