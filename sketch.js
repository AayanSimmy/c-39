var canvas, backgroundImage;

var car1_img,car2_img,car3_img,car4_img,track
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1
var car2
var car3
var car4
var car=[]

var form, player, game;

function preload(){
 track = loadImage("images/track.jpg"); 
  car1_img = loadImage("images/car1.png"); 
  car2_img = loadImage("images/car2.png");
   car3_img = loadImage("images/car3.png"); 
   car4_img = loadImage("images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
