class Game {
  constructor(){
    this.player = new Player(200, 200)
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
    }
    moveDown(){
    this.row += 1;
    this.row += 1;
    }
    moveLeft(){

    }
    moveRight(){
      this.col += 1;
    }
    draw(){
    image(this.image, this.row, this.col, this.width, this.height)
      
    }
    preload(){
    this.image = loadImage('../assets/character-down.png')
    }
  }

