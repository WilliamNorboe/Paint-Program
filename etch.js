
let grid = document.querySelector("#container");

let changeGridButton = document.querySelector("#changeGrid");
changeGridButton.addEventListener("click", changeGrid);


createGrid(16);

function createGrid(numSquares){
    let squareID = 1;
    for(let i = 0; i < numSquares; ++i){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < numSquares; ++ j){
            const square = document.createElement('div');
            square.classList.add("square");
            square.id = "square" + squareID;
            squareID++;
            square.addEventListener("mouseover", () => {squareHover(square);});
            row.appendChild(square);
        }
    grid.appendChild(row);
    }
}

function squareHover(square){
    square.classList.add("hover");
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function changeGrid(){
    let numSquares = prompt("Enter Number of Square on Each Row: ");
    if(numSquares > 100 || numSquares < 1){
        window.alert("Sorry, only numbers between 1 and 100");
        return;
    }
    removeAllChildNodes(grid);
    createGrid(numSquares);
}
