
let sketchPad = document.getElementById("sketchPad");

//creates the square
function divBoxes() {
    let div = document.createElement('div');
    div.style.width = '16px';
    div.style.height = '16px';
    div.style.borderColor ='black';
    return div;
}

// makes square into grid and appends them to html
function grid(size=16) {
    for (let i = 0; i <= size ; i++) {
        for (let x = 0; x<=size; x++) {
            sketchPad.appendChild(divBoxes(sketchPad.clientWidth / 16))
        }
    };
};

console.log(grid(size=16));



