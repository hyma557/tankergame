var tank1, tank2, tank1I, tank2I;
var bg, bgi;
var bomb1, bomb2, bomb1I, bomb2I;
var medkit, medkitI, medkit1
var bomb1Group, bomb2Group
var player1Life = 50
var player2Life = 50
var player1Medkit = 3
var player2Medkit = 3
var gm, gmI
var s1, s2, s3, s4, s5, s6, s7, s8;

function preload(){
  bgi = loadImage("images/background.png")
  tank1I = loadImage("images/imgt2.png")
  tank2I = loadImage("images/imgt1.png")
  bomb1I = loadImage("images/bomb1.png")
  bomb2I = loadImage("images/bomb2.png")
  medkitI = loadImage("images/medkit.png")
  gmI = loadImage("images/GAMEOVER.png")

}


function setup(){
  createCanvas(windowWidth, windowHeight);
 bg = createSprite(width / 2, height / 2)
  bg.addImage(bgi)
  bg.scale = 1.15
  bg.velocityX = -2



  tank1 = createSprite(width / 2 - 400, height - 200, 50, 50);
   tank1.addImage(tank1I)
   tank1.scale = 0.5
   tank2 = createSprite(width - 250, height - 200, 50, 50);
   tank2.addImage(tank2I)
   tank2.scale = 0.5

   tank1.setCollider("rectangle",0,0,tank1.width-700,tank1.height-100);
  tank1.debug = false
  tank2.setCollider("rectangle",0,0,tank2.width-700,tank2.height-100);
  tank2.debug = false
  

   medkit = createSprite(width/2-175, tank1.y, 50, 50)
   medkit.addImage(medkitI)
   medkit.scale = 0.25

   medkit1 = createSprite(width/2+200, tank2.y, 50, 50)
   medkit1.addImage(medkitI)
   medkit1.scale = 0.25

   s1 = createSprite(width/2-600, tank1.y, 20, 330)
   s2 = createSprite(tank1.x-5, height-395, 450, 20)
   s3 = createSprite(tank1.x-5, height-1, 450, 20)
   s4 = createSprite(width/2-175, tank1.y, 20, 330)
   s5 = createSprite(width/2+600, tank1.y, 20, 330)
   s6 = createSprite(tank2.x-5, height-395, 450, 20)
   s7 = createSprite(tank2.x-5, height-1, 450, 20)
   s8 = createSprite(width/2+175, tank1.y, 20, 330)
   

  
   
bomb1Group = new Group()
bomb2Group = new Group()

  
}


function draw(){
   
  background(0);
  //MOTION OF BACKGROUND.
  if(bg.x < 500){
    bg.x = width/2
  }


  
  tank1.bounceOff(s1)
  tank1.bounceOff(s2)
  tank1.bounceOff(s3)
  tank1.bounceOff(s4)
  tank2.bounceOff(s5)
  tank2.bounceOff(s6)
  tank2.bounceOff(s7)
  tank2.bounceOff(s8)
//CONTROLERS OF PLAYERS.
if(keyWentDown("D")||keyWentDown("d")){
  tank1.velocityX = 10
}

if(keyWentDown("A")||keyWentDown("a")){
  tank1.velocityX = -10
  
}

if(keyWentDown(RIGHT_ARROW)){
  tank2.velocityX = 10
  
}

if(keyWentDown(LEFT_ARROW)){
  tank2.velocityX = -10
  
}

if(keyWentDown("W")||keyWentDown("w")){
  tank1.velocityY = -10
}

if(keyWentDown("S")||keyWentDown("s")){
  tank1.velocityY = 10
  
}

if(keyWentDown(UP_ARROW)){
  tank2.velocityY = -10
  
}

if(keyWentDown(DOWN_ARROW)){
  tank2.velocityY = 10
  
}

if(keyWentUp("W")||keyWentUp("w")){
  tank1.velocityY = 0
}

if(keyWentUp("S")||keyWentUp("s")){
  tank1.velocityY = 0
  
}

if(keyWentUp(UP_ARROW)){
  tank2.velocityY = 0
  
}

if(keyWentUp(DOWN_ARROW)){
  tank2.velocityY = 0
  
}

if(keyWentUp("D")||keyWentUp("d")){
  tank1.velocityX = 0
}

if(keyWentUp("A")||keyWentUp("a")){
  tank1.velocityX = 0
}

if(keyWentUp(RIGHT_ARROW)){
  tank2.velocityX = 0
}

if(keyWentUp(LEFT_ARROW)){
  tank2.velocityX = 0
}


 //VISIBILITY OF MEDKIT AND SIDES
medkit.visible = false
medkit1.visible = false
s1.visible = false
s2.visible = false
s3.visible = false
s4.visible = false
s5.visible = false
s6.visible = false
s7.visible = false
s8.visible = false


//BOMB1 CONDITION
if(bomb1Group.isTouching(tank2)){
  bomb1Group[0].destroy()
  player2Life -= 10

}
//BOMB2 CONDITION
if(bomb2Group.isTouching(tank1)){
  bomb2Group[0].destroy()
  player1Life -= 10
}
//USE OF MEDKIT
if(player1Life <= 30){
  medkit.visible = true
  medkit.y = tank1.y
  }
  
  if(tank1.isTouching(medkit)){
  medkit.y = 0
  player1Life += 10
  player1Medkit -= 1
  }
  
  if(player2Life <= 30){
  medkit1.visible = true
  medkit1.y = tank2.y
  }
  
  if(tank2.isTouching(medkit1)){
  medkit1.y = 0
  player2Life += 10
  player2Medkit -= 1
  }
  
  if(player1Medkit <= 0){
    medkit.destroy()
  }
  
  if(player2Medkit <= 0){
    medkit1.destroy()
  }

if(keyWentDown("Q")||keyWentDown("q")){
  spawnbomb1()
}

if(keyWentDown("M")||keyWentDown("m")){
  spawnbomb2()
}
if(player1Life <= 0||player2Life <= 0){
  gameOver()
}
drawSprites()

  textSize(25)
  fill("lightGreen")
  text("player1Life: " + player1Life, width/2+400, height/2-260)
  text("player2Life: " + player2Life, width/2+400, height/2-230)

  textSize(25)
  fill("Blue")
  text("player1Medkit: " + player1Medkit, width/2-500, height/2-260)
  text("player2Medkit: " + player2Medkit, width/2-500, height/2-230)

  

  
  
 


}

function spawnbomb1(){
  bomb1 = createSprite(tank1.x, tank1.y, 10, 10)
    bomb1.addImage(bomb1I)
    bomb1.velocityX = 13
    bomb1.scale = 0.2 
    bomb1Group.add(bomb1)
    bomb1.setCollider("rectangle",0,0,tank1.width-700,tank1.height-200);
    bomb1.debug = false
}


function spawnbomb2(){
  bomb2 = createSprite(tank2.x, tank2.y, 10, 10)
    bomb2.addImage(bomb2I)
    bomb2.velocityX = -13
    bomb2.scale = 0.2
    bomb2Group.add(bomb2)
   
    bomb2.setCollider("rectangle",0,0,tank2.width-700,tank2.height-200);
    bomb2.debug = false
}

function gameOver(){
  gm = createSprite(width/2, height/2)
  gm.addImage(gmI)
  gm.scale = 2
}




