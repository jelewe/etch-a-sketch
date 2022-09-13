const container = document.querySelector('#container');

const resetButton = document.querySelector('.resetButton');
    resetButton.addEventListener('click', resetGrid);

let slider = document.getElementById("gridRange");
let sliderValue = Number(slider.value);

//shows grid size text
let gridRangeDisplay = document.getElementById("gridRangeDisplay");
    gridRangeDisplay.innerText = `${slider.value} x ${slider.value}`;

//updates grid size text and slider value based on user slider input
    slider.oninput = function() {
        sliderValue = this.value;
        gridRangeDisplay.innerHTML= `${slider.value} x ${slider.value}`;
        makeGrid(this.value, this.value);
    };

 //creates cells based on grid sliderValue
function makeCells(num) {
    for (i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', function(event) { //changes cell color on mouseover
            event.currentTarget.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
};

//creates grid matrix from grid sliderValue by accessing CSS and calling makeCells
function makeGrid(numCols, numRows) {
    container.style.setProperty('--numCols', numCols);
    container.style.setProperty('--numRows', numRows);
    for (let i = 0; i < numCols; i++) {
        makeCells(numCols);
   }
};

//adds rainbow button functionality
const rgb = document.querySelector('.rgbButton');
rgb.addEventListener('click', function() {
    let cell = container.children;
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        cell [i].addEventListener('mouseover', function(event) {
            event.currentTarget.style.backgroundColor = getRainbow();
        })
     }
});

    //returns a random rainbow color
    function getRainbow() {
        let rgbArray = [
            '#FF6663',
            '#FEB144',
            '#FDFD97',
            '#9EE09E',
            '#9EC1CF',
            '#CC99C9',
        ];
        let color =  rgbArray[Math.floor(Math.random()*rgbArray.length)];
        return color;
    };

    //adds black pen button functionality
const black = document.querySelector('.blackButton');
black.addEventListener('click', function() {
    let cell = container.children;
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        cell [i].addEventListener('mouseover', function(event) {
            event.currentTarget.style.backgroundColor = 'black';
        })
     }
});

function resetGrid() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    makeGrid(sliderValue, sliderValue);
  };

makeGrid(sliderValue, sliderValue);