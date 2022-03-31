class Game {
  constructor(){
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
  }
   
 
  




  class Player {
    constructor(col, row){
    this.col = col;
    this.row = row;
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

  const player = new Player(0,0)
  console.log(player.col, player.row)