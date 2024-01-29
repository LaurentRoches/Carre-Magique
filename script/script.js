let firstSquare = document.getElementById('playground');
let secondSquare = document.getElementById('square');
let thirdSquare = document.getElementById('square2');

firstSquare.addEventListener('click', (e)=>{
    console.log(`Client X/Y: ${e.clientX}, ${e.clientY}`);
    secondSquare.style.top = `${e.clientY-50}px`;
    secondSquare.style.left = `${e.clientX-60}px`;
});

document.onmousemove = function (e){
    thirdSquare.style.top=`${e.clientY-50}px`;
    thirdSquare.style.left=`${e.clientX-60}px`;
};


