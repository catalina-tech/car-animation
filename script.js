var canvas, ctx;
var speed;
var carX = 0, carY=0, carAngle = 0;
var width, height;
var id;
var carColor;
var carColorDoors;
var centerx;
var centery;
var radius;
var radiusWheels;
var radiusCenter;

//var WheelsAngle = 0;

function init(){
  
  canvas =   document.getElementById("myCanvasCar");
  ctx = canvas.getContext("2d");
  
  width = canvas.width;
  height = canvas.height;
  carColor = "blue";
  carColorDoors = "darkblue";
  speed = 1;
  centerx = 400;
  centery = 30;
  radius = 100;
  radiusWheels = 50;
  radiusCenter = 15;
 

  
  drawCar(0,0,0); 
   id =  requestAnimationFrame(animationLoop); //This makes the car moves when the user open the browser, if I remove it, it will stop moving and the car only will move with the start button.
  
  }

function animationLoop(timeStamp){
  //1. Clear
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //2. Draw
 drawCar(carX,carY,carAngle); 
  //Move
  carX += speed;  
  //carAngle += 0.1;
  
   // check collision on left or right
      if(((carX+1015) > width) || (carX < 0)) {
        // cancel move + inverse speed
        carX -= speed;
        speed = -speed;
      }
 
  //WheelsAngle = Math.PI/2;
  
  id = requestAnimationFrame(animationLoop);    
}

function drawCar(x,y,angle){

                                                                            // Drawing a car
  
  ctx.save();
  
  ctx.translate(x-80,y+100);
  //ctx.rotate(angle);
  ctx.scale(1,1);
  
  //Truck
  //Parte delantera del camion
  ctx.fillStyle= carColor;
  ctx.fillRect(x+100,y+180,200,170);
    //Parte tracera del camion
  //ctx.strokeStyle="blue";
  ctx.fillRect(x+300,y+50,350,300);

 
    //Front Wheel

  ctx.save();
  
  //ctx.translate(x,y);
  //ctx.rotate(angle);

ctx.arc(x+210, y+380, radiusWheels,0,2*Math.PI,false); //Front Wheel
ctx.fillStyle = "black";
ctx.fill();

ctx.restore();


// Back Wheel

ctx.beginPath();
ctx.save();

ctx.arc(x+500, y+380, radiusWheels,0,2*Math.PI,false); // Back Wheel
ctx.fillStyle = "black";
ctx.fill();

ctx.restore();

//Center white point wheel front 

ctx.beginPath();
ctx.save();

ctx.fillStyle = "white";
ctx.arc(x+210,y+380, radiusCenter,0,2*Math.PI,false);
ctx.fill();

ctx.restore();

//Center white point wheel back

ctx.beginPath();
ctx.save();

ctx.arc(x+500,y+380, radiusCenter,0,2*Math.PI,false); //Center white point wheel back
ctx.fillStyle = "white";
ctx.fill();

ctx.restore();


  //rueda delantera  
  //ctx.fillStyle='black';
  //ctx.fillRect(x+200,y+350,70,70);

  //rueda tracera
  //ctx.fillStyle="black";
  //ctx.fillRect(x+450,y+350,70,70);
  
  //punto en el centro del camion llanta delantera
  //ctx.fillStyle="white";
  //ctx.fillRect(x+225,y+375,20,20);

  //punto en el centro del camion llanta tracera
  //ctx.fillStyle="white";
  //ctx.fillRect(x+475,y+375,20,20);
  
  //ctx.restore();

  
  //light
  ctx.fillStyle="yellow";
  ctx.fillRect(x+100,y+180,50,30);  
  
  //Windows
  ctx.strokeStyle="red";
  ctx.lineWidth = 5; //increase the with of the line
  ctx.strokeRect(x+320,y+70,100,110); //First window
  ctx.strokeRect(x+430,y+70,170,110);//Secons Window
  
  ctx.fillStyle="white";
  ctx.fillRect(x+320,y+70,100,110); //First window
  ctx.fillRect(x+430,y+70,170,110);//Secons Window
  
  //Doors  
  ctx.fillStyle= carColorDoors;
  ctx.fillRect(x+320,y+190,100,130); //First Door
  ctx.fillRect(x+430,y+190,170,130); //Second Door
  
  //Manijas de puertas  
  ctx.fillStyle="black";
  ctx.fillRect(x+380,y+200,30,20); //Manija primera puerta
  ctx.fillRect(x+440,y+200,30,20); //Manija segunda puerta
  
  //driver Daddy
  
  //head
  ctx.fillStyle="yellow";
  ctx.fillRect(x+345,y+100,60,60);
  
  //eyes
  ctx.fillStyle="green";
  ctx.fillRect(x+360,y+115,5,5); //First eye
  ctx.fillRect(x+380,y+115,5,5); //Second eye
  
  //nose
   ctx.fillStyle="red";
  ctx.fillRect(x+370,y+125,5,5); 
  
   //mouth
  ctx.fillStyle="black";
  ctx.fillRect(x+365,y+135,15,5); 
  
  ////Kid in the back
  
  //head
  ctx.fillStyle="yellow";
  ctx.fillRect(x+480,y+100,50,50);
  
  //eyes
  ctx.fillStyle="green";
  ctx.fillRect(x+490,y+115,5,5); //First eye
  ctx.fillRect(x+510,y+115,5,5); //Second eye
  
  //nose
   ctx.fillStyle="red";
  ctx.fillRect(x+500,y+125,5,5); 
  
   //mouth
   ctx.fillStyle="black";
  ctx.fillRect(x+495,y+135,15,5);  
  
  ctx.restore();

  
                                                                                 // First Cloud  
  ctx.beginPath();
  ctx.save();
 
  var x = 50, y = 80;
   
  ctx.moveTo(x, y);

   ctx.bezierCurveTo(x - 60, y + 40, x - 30, y + 70, x + 50, y + 50);  
   ctx.bezierCurveTo(x + 80, y + 120, x + 150, y + 100, x + 170, y + 70);
   ctx.bezierCurveTo(x + 250, y + 90, x + 250, y + 40, x + 220, y + 20);
   ctx.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
   ctx.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
   ctx.bezierCurveTo(x + 50, y - 75, x - 20, y - 60, x, y);
  
  
 
    ctx.fillStyle = '#8ED6FF';
    ctx.fill();
    ctx.restore();
  
                                                                                // Second Cloud  
  ctx.beginPath();
  ctx.save();
 
  var x = 600, y = 30;
   
  ctx.moveTo(x, y);

   ctx.bezierCurveTo(x - 60, y + 40, x - 30, y + 70, x + 50, y + 50);  
   ctx.bezierCurveTo(x + 80, y + 120, x + 150, y + 100, x + 170, y + 70);
   ctx.bezierCurveTo(x + 250, y + 90, x + 250, y + 40, x + 220, y + 20);
   ctx.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
   ctx.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
   ctx.bezierCurveTo(x + 50, y - 75, x - 20, y - 60, x, y);
  
    ctx.fillStyle = '#8ED6FF';
    ctx.fill();
    ctx.restore();

                                                                             // Third  Cloud  

  ctx.beginPath();
  ctx.save();
 
  var x = 1000, y = 60;
   
  ctx.moveTo(x, y);

/* ctx.bezierCurveTo(x - 40, y + 40, x - 30, y + 70, x + 50, y + 50);  
   ctx.bezierCurveTo(x + 100, y + 130, x + 150, y + 100, x + 170, y + 70);
   ctx.bezierCurveTo(x + 250, y + 90, x + 250, y + 40, x + 220, y + 20); */

   //ctx.bezierCurveTo(x + 260, y + 40, x + 200, y + 50, x + 170, y + 30);
   //ctx.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x - 80, y + 30);
   //ctx.bezierCurveTo(x + 50, y + 75, x + 20, y + 60, x, y); 

  //ctx.bezierCurveTo(x + 90, y, x - 50, y - 40, x - 10, y + 55 );
   ctx.bezierCurveTo(x - 20, y + 40, x - 30, y + 70, x + 80, y + 50);  
   //ctx.bezierCurveTo(x + 60, y + 80, x + 30, y + 60, x + 60, y + 50 );
   ctx.bezierCurveTo(x + 90, y + 110, x + 100, y + 80, x + 120, y + 70 );
   ctx.bezierCurveTo(x + 130, y + 110, x + 150, y + 100, x + 170, y + 70);
   ctx.bezierCurveTo(x + 250, y + 90, x + 250, y + 40, x + 220, y + 20);
   ctx.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
   ctx.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
   ctx.bezierCurveTo(x + 50, y - 75, x - 20, y - 60, x, y);
  
    ctx.fillStyle = '#8ED6FF';
    ctx.fill();
    ctx.restore();
  
  //round sun
  
  ctx.beginPath();
  ctx.save();
    
  ctx.arc(centerx,centery, radius,0,2*Math.PI,false);
  
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.restore();
  

}

function start(){
   id = requestAnimationFrame(animationLoop); 
}

function stop(){
  if(id){
    cancelAnimationFrame(id);
  }
}

 function changeColor() {
    var colorChange = document.getElementById("color");
    carColor = colorChange.value;
    //Use the current headSize value
    
   }

 function changeColorDoors() {
    var colorChangeDoors = document.getElementById("colorDoors");
    carColorDoors = colorChangeDoors.value;
    //Use the current headSize value
    
   }