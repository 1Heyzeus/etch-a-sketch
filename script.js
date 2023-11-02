let colour = "black"
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    genGrid(16);

    document.querySelector("body").addEventListener('click', (e) => {
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector('#draw');
            if(click){
                draw.textContent = "Click to Stop";
            } else {
                draw.textContent = "Click to Draw";
            }
        }
    })

    let btn_popup = document.querySelector('#select');
    btn_popup.addEventListener('click', () =>{
        let size = getSize();
        genGrid(size);
    })
})

function genGrid(size){
    const grid = document.querySelector('.gameGrid');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0;i<numDivs;i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", colourDiv)
        grid.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let input = window.prompt('Please enter a size for the board');
    let message = document.querySelector('#message');
    if(input === ''){
        message.textContent = 'Please enter a number';
    } else if (input <=0 || input > 100){
        message.textContent = 'Please choose a number between 1 and 100';
    } else {
        message.textContent = 'Enjoy!';
        return input;
    }
}

function colourDiv(){
   if(click){ 
    if(colour == "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = "black";
    }
  }
}

function setColour(colourChoice){
    colour = colourChoice;
}

function resetGrid(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}