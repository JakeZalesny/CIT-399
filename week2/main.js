let clickers = 50;
let remainingClickers = clickers;  
let startTime= Date.now(); 
const boardWidth = 600; 
const boardHeight = 400; 
const board = document.querySelector("#board");

function sync(dom, pos) {
    dom.style.setProperty('--left', `${pos.x}px`);
    dom.style.setProperty('--top', `${pos.y}px`);
}

const generatePos = () => {
    const pos = {};
    pos.x = Math.random() * boardWidth;
    pos.y = Math.random() * boardHeight; 
    return pos; 
}

function createClicker() {
    const clicker = document.createElement("div");
    const pos = generatePos(); 
    clicker.classList.add('clicker');
    sync(clicker, pos);
    board.append(clicker);
    clicker.addEventListener("click", clickHandler)
}

const clickHandler = (e) => {
    console.log(e.target);
    destroyClicker(e.target)
    if(remainingClickers === 0) {
        console.log("Done!");
    }
}

function destroyClicker(el) {
    el.remove();
    remainingClickers--; 
}

function init() {
    for(let i = 0; i < clickers; i++) {
        this.createClicker(); 
    }
}

init(); 