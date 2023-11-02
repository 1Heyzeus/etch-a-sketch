document.addEventListener("DOMContentLoaded", function(){
    genGrid(16);
    console.log('Hi')
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