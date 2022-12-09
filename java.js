
let sketchPad = document.getElementById("sketchPad");

//creates the square
function divBoxes() {
    let div = document.createElement('div');
    div.classList.add('divBoxes');
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.borderColor ='black';
    return div;
}

// makes square into grid and appends them to html
function grid() {
    for (let i = 0; i < 256 ; i++) {
            sketchPad.appendChild(divBoxes());
        }
    };


console.log(grid())



