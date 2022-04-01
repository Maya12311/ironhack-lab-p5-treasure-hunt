class Game {
  constructor(){
    this.player = new Player(200, 200)
    this.treasure = new Treasure(300, 300)
  }
  drawGrid() {
      let lineX = 100
      let lineY = 100
      for (let i = 0; i < 9; i++) {
        line(lineX, 0, lineX, 1000)
        lineX +=100
      } 
      for (let i = 0; i < 9; i++) {
        line(0, lineY, 1000, lineY)
        lineY +=100
      
      } 
    } 
     draw() {
       this.player.draw()
       this.treasure.draw()
        
      }   
  
    
  }
  




  class Player {
    constructor(col, row){
    this.col = 0;
    this.row = 0;
    this.width = 100
    this.height = 100
    this.image
    }
    moveUp(){
      this.col -=100;
    }
    moveDown(){
    this.col += 100;
    
    }
    moveLeft(){
      this.row -=100;
    }
    moveRight(){
      this.row += 100;
    }
    draw(){
    image(this.image, this.row, this.col, this.width, this.height)
    if (keyIsDown(65)){
      this.moveRight()
    }
      
    }
    preload(){
    this.image = loadImage('../assets/character-down.png')
    }
  }

function keyPressed () {
  if(keyCode === 39){
       game.player.moveRight()
  } 
  if (keyCode === 40){
       game.player.moveDown()
  }
  if (keyCode === 37){
        game.player.moveLeft()
  }
  if (keyCode === 38) {
        game.player.moveUp()
  }
}


class Treasure {
  constructor(col, row) {
  this.col = 300;
  this.row = 300;
  this.image
  this.width = 100;
  this.height = 100;
  }
  setRandomPosition(){
  }
  preload(){
  this.image = loadImage('../assets/treasure.png')
  }
  draw(){
    image(this.image, this.row, this.col, this.width, this.height)
  }
}

