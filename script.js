const canvas = document.querySelector('#canvasContainer');

const sizeSelector = document.querySelector('#sizeSelector');
const colorSelector = document.querySelector('#colorSelector');
const eraseSelector = document.querySelector('#eraseSelector');
const clear = document.querySelector('#clearSelector');
const randomSelector = document.querySelector('#randomSelector');

let colore=colorSelector.value
let clicked = false;
let erase= false;
let random=false;
let colorize=true;
document.body.onmouseup = () => {
  clicked = false;
};
document.body.onmousedown = () => {
  clicked = true;
};
randomSelector.onclick= ()=>{random=true;erase=false;colorize=false}
colorSelector.onclick=()=>{random = false;erase=false;colorize=true}
eraseSelector.onclick=()=>{random=false;erase=true;colorize=false}
function color(){
  if(random){
    return rainbow()
  }
  if(erase){
    return 'white'
  }
  if(colorize){
    return colore
  }
}

function createBoard() {
  canvas.replaceChildren();
  let size = document.querySelector('#sizeSelector').value;
  canvas.style.gridTemplateColumns = `repeat(${size},auto)`;
  canvas.style.gridTemplateRows = `repeat(${size},auto)`;
  for (let i = 0; i < size ** 2; i++) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('square');
    createPixel.addEventListener('mouseover', function (e) {
      if (clicked) {
        e.target.style.backgroundColor = color();
      }
    });
    createPixel.setAttribute('draggable', 'false');
    canvas.appendChild(createPixel);
  }
}
createBoard();

clear.onclick = () => {
  createBoard();
};

sizeSelector.addEventListener('input', () => {
  createBoard();
});

colorSelector.addEventListener('input', (e) => {
  colore = e.target.value;
});

function rainbow() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

