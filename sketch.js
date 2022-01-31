const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare uma matriz para as flechas playerArrows = [ ]
var playerArrows = [];

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("centro");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

 // Descomente o bloco de código e use o loop for correto para exibir a flecha usando a função showArrow()
  for (var i=0; i<playerArrows.length; i++) 
  {
  showArrows(i, playerArrows);
  }

 // for (var i=0; i<playerArrows; i++) 
 //{
 // showArrows(i, playerArrows);
 // }

 // for (var i=0; i<playerArrows.length; i++) 
 //{
 // showArrows(playerArrows, i);
 // }





}

/*********** Escolha a função keyPressed() correta entre essas *************/

 function keyPressed() {
     // crie um objeto arrow (flecha) e adicione a uma matriz ; defina seu ângulo igual ao ângulo do playerArcher (flecha do jogador)
     var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;
    var arrow = new PlayerArrow(posX, posY, 100, 10);
    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow); }


// function keyPressed() {
//   if(keyCode === 32){
//     // crie um objeto arrow (flecha) e adicione a uma matriz ; defina seu ângulo igual ao ângulo do playerArcher (flecha do jogador)
//     var posX = playerArcher.body.position.x;
//     var posY = playerArcher.body.position.y;
//     var angle = playerArcher.body.angle+PI/2;
//     var arrow = new PlayerArrow(posX, posY, 100, 10);
//     arrow.trajectory = [];
//     Matter.Body.setAngle(arrow.body, angle);
//     playerArrows.push(arrow);
//   }
// }


// function keyPressed() {
//   if(keyCode === 32){
//     // crie um objeto arrow (flecha) e adicione a uma matriz ; defina seu ângulo igual ao ângulo do playerArcher (flecha do jogador)
//     var posX = playerArcher.body.position.x;
//     var posY = playerArcher.body.position.y;
//     var angle = playerArcher.body.angle+PI/2;
//     Matter.Body.setAngle(arrow.body, angle);
//     playerArrows.push(arrow);
//   }
// }





function keyReleased () {

  if(keyCode === 32){
    //chame a função shoot() para cada flecha na matriz playerArrows
    if (playerArrows.length) {
      var angle = playerArcher.body.angle+PI/2;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }

}
//Exibir flecha e trajetoria 
function showArrows(index, arrows) {
  arrows[index].display();
  
    
  
 

}
