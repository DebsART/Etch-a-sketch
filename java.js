let squareDiv = document.createElement("div");
squareDiv.classList.add('sketchPad');

squareDiv.style.width = '16px';
squareDiv.style.height = '16px';

let gridSquare = document.createElement('div')
gridSquare.classList.add('gridSquare');
gridSquare.style.border = 'solid';
gridSquare.style.borderColor = 'black';


function grid(gridSquare) {
    for (let i = 0; i < 256; i++) {
        squareDiv.appendChild(gridSquare)
    };
};


let container = document.querySelector("#container");
container.appendChild(squareDiv);

