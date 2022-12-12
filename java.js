
let sketchPad = document.getElementById("sketchPad");
let sliderRange = document.querySelector("#sliderRange");
let rangeValue = document.querySelector("#rangeValue");



//creates the square
function divBoxes() {
    let div = document.createElement('div');
    sketchPad.setAttribute('style', 'grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);');

    div.classList.add('divBoxes');
   div.style.height ='39px';
   div.style.width ='39px';
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
    
    let reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        div.style.backgroundColor ='black';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor ='white';
        });
    });

    let eraser = document.querySelector('#eraser');
    eraser.addEventListener('click', () =>{
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    });

    let colorInput = document.querySelector("#color");
    colorInput.addEventListener('input', ()=> {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = colorInput.value;
        });
    });

    

 return div;
};





// makes square into grid and appends them to html
function grid(size=16) {
    for (let i = 0; i < size*size ; i++) {
        sketchPad.appendChild(divBoxes(sketchPad.height/size));
        sketchPad.appendChild(divBoxes(sketchPad.width/size));

        }
    };

   

    sliderRange.addEventListener('input',() => {
        sliderRange.addEventListener('mousemove', () => {
             grid(size = sliderRange.value);
    });

});

    





console.log(grid())
