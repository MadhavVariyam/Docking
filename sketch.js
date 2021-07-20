var iss, bg, spacecraft1, spacecraft2, spacecraft3, spacecraft4
var issSprite, scSprite
var hasDocked = false

function setup() {
  createCanvas(800,400);
  issSprite = createSprite(350, 130, 50, 50);
  issSprite.addImage(iss)
  issSprite.scale=0.45

  scSprite = createSprite(280, 240, 50, 50);
  scSprite.addImage(spacecraft1)
  scSprite.scale=0.15
}

function draw() {
  background(255,255,255);
  
  if(!hasDocked){
    scSprite.x = scSprite.x + random(-1,+1)

    if(keyDown(UP_ARROW)){
      scSprite.y = scSprite.y - 2
    }
    if(keyDown(UP_ARROW)){
      scSprite.addImage(spacecraft2)
    }

    if(keyDown(LEFT_ARROW)){
      scSprite.addImage(spacecraft3)
      scSprite.x = scSprite.x - 1
    }
    if(keyDown(RIGHT_ARROW)){
      scSprite.addImage(spacecraft4)
      scSprite.x = scSprite.x + 1
    }
  }
  if(scSprite.y <= (issSprite.y+60)&& scSprite.x <=(issSprite.x - 10)){
    hasDocked = true
    text("DOCKING SUCCESSFULL", 200,300)
  }

  drawSprites();
}

function preload(){
  iss = loadImage('iss.png')
  bg = loadImage('spacebg.jpg')
  spacecraft1 = loadImage('spacecraft1.png')
  spacecraft2 = loadImage('spacecraft2.png')
  spacecraft3 = loadImage('spacecraft3.png')
  spacecraft4 = loadImage('spacecraft4.png')
  
}