import pop from "../pop/index.mjs";
const { KeyControls, Container, CanvasRenderer } = pop; 

let clickers = 50;
let remainingClickers = clickers;  
let startTime= Date.now(); 
const boardWidth = 600; 
const boardHeight = 400; 
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
console.log(ctx.canvas);
const board = document.querySelector("#board");
ctx.strokeStyle = "black";
ctx.fillStyle = "red";
const renderer = new CanvasRenderer(boardWidth, boardHeight);
document.querySelector("#board").appendChild(renderer.view);

const controls = new KeyControls(); 

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

function loopy(ms) {
    requestAnimationFrame(loopy);

    ctx.fillRect(300, 200, 50, 50);
    ctx.strokeRect(300, 200, 50, 50);
    const t = ms / 1000; 
    dt = t - last; 
    last = t; 

    // Game objects
    const scene = new Container();
    const message = new Text("The Renderer!", {
        font: "40pt sans-serif",
        fill: "DarkRed",
        align: "center"
    });
message.pos.x = w / 2;
message.pos.y = h / 2;
scene.add(message);

// Render the main container
renderer.render(scene);

}



requestAnimationFrame(loopy)

init(); 