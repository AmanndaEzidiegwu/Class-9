var player 







function setup() {
  createCanvas(400,400);
   player = createSprite(200,200,10,10);
player.shapeColor="green";
}

function draw() 
{
  
  

  if(keyDown("left"))
  {
   background("orange");
   player.x=player.x -3;
  }
  if(keyDown("right"))
  {
    background("blue");
   player.x=player.x +3;
  }

  if(keyDown("up"))
  {
    background("purple");
   player.y=player.y -3
  }
   if(keyDown("down"))
   {
    background("red");
    player.y=player.y +3
   }
   
   
      drawSprites();
}




