const container = document.querySelector('#container');

window.onload = function() {
    let i = 0;
    for (i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', colorSquare);
        container.appendChild(div);
    }
};

function colorSquare(event) {
   event.currentTarget.style.backgroundColor = 'black';
};
