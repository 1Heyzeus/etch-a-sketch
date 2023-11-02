document.addEventListener("DOMContentLoaded", function(){
    genGrid(16);

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
        message.textContent = 'Thank you!';
        return input;
    }
}