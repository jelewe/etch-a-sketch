const container = document.querySelector('#container');

// creates grid slider and shows grid size
let slider = document.getElementById("gridRange");
let sliderValue = Number(slider.value);
let gridRangeDisplay = document.getElementById("gridRangeDisplay");
    gridRangeDisplay.innerText = `${slider.value} x ${slider.value}`;
    slider.oninput = function() {
        gridRangeDisplay.innerHTML= `${slider.value} x ${slider.value}`;
    };

//    slider.addEventListener('mouseup', makeGrid);

    //creates cells based on grid sliderValue
function makeCells(sliderValue) {
    for (i = 0; i < sliderValue; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', function(event) { //changes cell color on mouseover
            event.currentTarget.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
};

//creates grid matrix from grid sliderValue by accessing CSS and calling makeCells
function makeGrid(sliderValue, sliderValue) {
    container.style.setProperty('--numCols', sliderValue);
    container.style.setProperty('--numRows', sliderValue);
    for (let i = 0; i < sliderValue; i++) {
        makeCells(sliderValue);
   }
};

makeGrid(sliderValue, sliderValue);