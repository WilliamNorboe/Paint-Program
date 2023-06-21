
let grid = document.querySelector("#container");

let squareID = 1;
for(let i = 0; i < 16; ++i){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < 16; ++ j){
        const square = document.createElement('div');
        square.classList.add("square");
        square.id = "square" + squareID;
        squareID++;
        square.addEventListener("mouseover", () => {squareHover(square);});
        row.appendChild(square);
    }
    grid.appendChild(row);
}

function squareHover(square){
    square.classList.add("hover");
}