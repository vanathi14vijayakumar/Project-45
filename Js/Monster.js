class Monster{
    constructor(x,y,velocityX,velocityY,Number){
        this.x = x
        this.y =y
        this.monsters
        this.yPos = this.y-100
        this.image = loadImage("Images/monster.png")
        

        
            this.monster = createSprite(x+100,y,50,50)
            this.monster1 = createSprite(x-100,y,50,50)
            this.monster2 = createSprite(x,y+100,50,50)
            this.monster3 = createSprite(x,y-100,50,50)

            this.monster.addImage(this.image);
            this.monster.scale = 0.04
            this.monster1.addImage(this.image);
            this.monster1.scale = 0.04
            this.monster2.addImage(this.image);
            this.monster2.scale = 0.04
            this.monster3.addImage(this.image);
            this.monster3.scale = 0.04


            this.wall = createSprite(x+100,y-100,10,10)
            this.wall1 = createSprite(x+100,y+100,10,10)
            this.wall2 = createSprite(x-100,y-100,10,10)
            this.wall3 = createSprite(x-100,y+100,10,10)

          //  this.monster.velocityX = 2
            
            this.wall.visible = false
            this.wall1.visible = false
            this.wall2.visible = false
            this.wall3.visible = false
            this.monster.debug = true

            
            
        
    }

    stopMonsters(){
        this.monster.setVelocity(0,0)
        this.monster1.setVelocity(0,0)
        this.monster2.setVelocity(0,0)
        this.monster3.setVelocity(0,0)
    }

    startMonsters(){
        this.monster.velocityY = 2
            this.monster1.setVelocity(0,-2)
            this.monster2.setVelocity(-2,0)
            this.monster3.setVelocity(2,0)

    }

    display(){
        this.monster.bounceOff(this.wall)
        this.monster.bounceOff(this.wall1)
        this.monster1.bounceOff(this.wall2)
        this.monster1.bounceOff(this.wall3)
        this.monster2.bounceOff(this.wall1)
        this.monster2.bounceOff(this.wall3)
        this.monster3.bounceOff(this.wall)
        this.monster3.bounceOff(this.wall2)
        drawSprites()
    }

}