const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    

    box1 = new Box(700,310,70,70);
    box2 = new Box(700,260,70,70);
    w1= new Ball(260,380,10);
    w2= new Ball(350,380,10);
    box3 = new Box(700,190,70,70);
    box4 = new Box(700,120,70,70);
    car1= new Box(300,350,150,50)
    
    box5 = new Box(700,50,70,70);
    
    ball = new Ball(450,250,20);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:450, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    w1.display();
    w2.display();
    box3.display();
    box4.display();
    
car1.display();
    box5.display();
    

    ball.display();
    
    slingshot.display();    

line(350,350,450,50)

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


