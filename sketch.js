var player,monster,target,reset,resetImage,target2
var gameState = "play"


function preload()
{
	BgImage = loadImage("Images/back.jpg")
  resetImage = loadImage("Images/restart.png")
}

function setup() {
	createCanvas(800, 700);
	player = new Player(700,650,0,0)
  enemy = new Monster(200,450,0,0,5)
  target = new Target(200,450,20)
  reset = createSprite(400,450,50,50)
  reset.addImage(resetImage)
  reset.visible = false
  enemy.startMonsters()
	
}


function draw() {
  
  background(BgImage);
  
  ifhitMonster()

  if(mousePressedOver(reset)&&gameState == "stop"){
    gameState ="play"
    player.body.x = 700
    player.body.y = 650
    enemy.startMonsters()
  }

  if(gameState == "play2"){
    target2 = new Target(700,350,20)
    target2.display()
  }

  
  player.display();
  enemy.display();
  target.display();
 
}

function ifhitMonster(){
  if(player.body.isTouching(enemy.monster) ||player.body.isTouching(enemy.monster1) ||player.body.isTouching(enemy.monster2)||player.body.isTouching(enemy.monster3)){
    textSize(30)
    fill (0)
    text ("Game Over",400,400)
    
    player.body.setVelocity(0,0)
    reset.visible = true
    gameState = "stop"
    enemy.stopMonsters()
  }

}



