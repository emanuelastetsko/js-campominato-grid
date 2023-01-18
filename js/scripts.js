const container = document.getElementById("container");

container.style.display = "none";


const grid = document.getElementById("grid");


function generaTabella() {
  // Ciclo per generazione delle celle 
  
    for (let index = 1; index <= 100; index++) {
        
        // Creazione cella 
        const cell = document.createElement("div");
        cell.classList.add("square");
        grid.append(cell);
        

        //Al click colorare le celle di rosa 
        cell.addEventListener("click",
            function () {
                console.log("Hai cliccato la cella n." + index);
                
                if(cell.classList.contains("click")){
                    cell.classList.remove("click");
                }
                else{
                    cell.classList.add("click");
                }

            }
        );

        
    }

}


function svuotaTabella() {
    // Svuoto la tabella
    grid.innerHTML = "";
    console.log("La tabella è stata svuotata");
}



const myButton = document.getElementById("play");

// Al click deve apparire la griglia con tutte le sue celle
myButton.addEventListener("click",

  function () {
    svuotaTabella();
    generaTabella();
    
      
    container.style.display = "inline";
    console.log("Il gioco è iniziato");
    
  }

);