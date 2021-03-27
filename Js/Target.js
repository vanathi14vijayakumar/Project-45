class Target{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r

    }
    level2Target(){
        
    }

    display(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.r,this.r)
        if(player.body.x < this.x +this.r && player.body.y < this.y+this.r){
            player.body.setVelocity(0,0)
            gameState = "play2"
            //level2Target()
        }

    }

}