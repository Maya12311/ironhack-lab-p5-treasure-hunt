const game = new Game();
const player = new Player();

//const player = new Player(0, 0);


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  //createCanvas(1000, 600)
}

function draw() {
  clear()
  game.drawGrid();
  game.draw()
}

function preload() {
game.player.preload()
}