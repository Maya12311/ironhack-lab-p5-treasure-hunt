class Game {
  constructor(){
    //  this.player = new Player(0,0)
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
        preload(){
          this.player.image = loadImage('/assets/character-down.png')
      }  
      draw(){
        this.player.draw()
      }   
  }
   
 
  




  class Player {
    constructor(col, row){
    this.col = col;
    this.row = row;
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
      Image(this.image, this.row, this.col, this.width, this.height)
      
    }
  }

