class Player{
    constructor(x,y,velocityX,velocityY){

     this.x = x
     this.y = y
     this.velocityX = velocityX
     this.velocityY = velocityY
     this.image = loadImage("Images/player.png")
     this.body = createSprite(this.x,this.y,50,50)
     this.body.scale = 0.1
     this.body.addImage(this.image)
     this.body.debug =true
     this.body.setCollider ("rectangle",0,0,100,100)
     //this.image = loadImage()
    }
    display(){
      //  image()
      
      if(keyDown("space") && gameState == "play"){
          this.body.velocityX = -7
          this.body.velocityY = -3
      }
        
    }

}