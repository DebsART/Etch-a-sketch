
let sketchPad = document.getElementById("sketchPad");

//creates the square
function divBoxes() {
    let div = document.createElement('div');
    div.classList.add('divBoxes');
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.backgroundColor ='black';
    div.style.borderColor ='black';

//makes squares white during mouse over event
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'white';
     });
    
    let changeColor = document.querySelector('#changeColor');
 
//randomized colors when 'change color' button is clicked
    changeColor.addEventListener('click',() => {
        div.addEventListener('mouseover', () => {
            let colors = Math.floor(Math.random() * 360);
            div.style["background-color"] = `hsl(${colors}, 60%, 50%)`;
        });
      });
    
    return div;
}


// makes square into grid and appends them to html
function grid() {
    for (let i = 0; i < 256 ; i++) {
            sketchPad.appendChild(divBoxes());
        }
    };

    
   




console.log(grid())



