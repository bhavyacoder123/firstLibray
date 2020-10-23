var movingrect,fixedrect;

var gameObject1,gameObject2,gameObject3,gameObject4

function setup() {



  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 movingrect.shapeColor="green";

 fixedrect=createSprite(200,200,50,100);
 fixedrect.shapeColor="green";

 gameObject1=createSprite(100,100,50,50);
 gameObject1.shapeColor="green";

 gameObject2=createSprite(200,100,50,50);
 gameObject2.shapeColor="green";

 gameObject3=createSprite(300,100,50,50);
 gameObject3.shapeColor="green";

 gameObject4=createSprite(400,100,50,50);
 gameObject4.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(isTouching(movingrect,gameObject1)){

    movingrect.shapeColor="blue";
    gameObject1.shapeColor="red";
    
  }
  else{
    movingrect.shapeColor="green";
     gameObject1.shapeColor="green";

  }


  if(isTouching(movingrect,gameObject2)){

    movingrect.shapeColor="blue";
    gameObject2.shapeColor="red";
    
  }
  else{
    movingrect.shapeColor="green";
     gameObject2.shapeColor="green";

  }

 // ball.isTouching(playerPaddle);
   
  //isTouching();
  
  drawSprites();
}

