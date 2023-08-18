
let grid = document.querySelector("#container");

let changeGridButton = document.querySelector("#changeGrid");
changeGridButton.addEventListener("click", changeGrid);


createGrid(16);
createColors(["red", "yellow", "blue", "green", "purple", "orange", "white"]);


function createColors(colors){
    let colorsDIV = document.getElementById("colors");
    squareID = 1;
    for(let j = 0; j < colors.length; ++ j){
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.height = "25px";
        square.style.width = "25px";
        square.id = "color" + squareID;
        square.style.backgroundColor = colors[j];
        squareID++;
        // square.addEventListener("mouseover", () => {squareHover(square);});
        colorsDIV.appendChild(square);
    }
}

function createGrid(numSquares){
    let squareID = 1;
    let size = (document.querySelector('body').clientWidth/numSquares) + "px";
    for(let i = 0; i < numSquares; ++i){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < numSquares; ++ j){
            const square = document.createElement('div');
            square.classList.add("square");
            square.style.height = size;
            square.style.width = size;
            square.id = "square" + squareID;
            squareID++;
            square.addEventListener("mouseover", () => {squareHover(square);});
            row.appendChild(square);
        }
    grid.appendChild(row);
    }
}

function squareHover(square){
    square.style.backgroundColor = generateColor();
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function generateColor(){
    let hexCodes = "0123456789ABCDEF";
    let randomHexNumber;
    let color = "#";
    for(let i = 0; i < 6; ++i){
        randomHexNumber = Math.floor(Math.random() * 16);
        color = color + hexCodes[randomHexNumber];
    }
    return color;
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
