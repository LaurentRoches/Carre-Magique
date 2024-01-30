let firstSquare = document.getElementById('playground');
let secondSquare = document.getElementById('square');
let thirdSquare = document.getElementById('square2');
let isDragging = false;

firstSquare.addEventListener('mousedown', (e) => {
    isDragging = true;
    thirdSquare.style.top=`${e.clientY-50}px`;
    thirdSquare.style.left=`${e.clientX-60}px`;
    let drag = (e) => {
        if (isDragging) {
            thirdSquare.style.left = `${e.clientX - 60}px`;
            thirdSquare.style.top = `${e.clientY - 50}px`;
        };
    };
    let noDrag = () => {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', noDrag);
    };
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', noDrag);
});
firstSquare.addEventListener('mouseup', (e) => {
    secondSquare.style.top = `${e.clientY-50}px`;
    secondSquare.style.left = `${e.clientX-60}px`;
});

firstSquare.ondragstart = function () {
    return false;
};
