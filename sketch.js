var foodStock
 var foodS
var database
var dog 
var doghappy
var dogimg , doghappyimg

function preload(){

dogimg=loadImage("images/dogImg.png")
doghappyimg=loadImage("images/dogImg1.png")
}

function setup(){
  database = firebase.database()
  dog=createSprite(250,250)
  dog.addimage("dog",dogimg)

  foodStock= database.ref('foodS');
  foodStock.on("value",readstock);  
}


function draw() {  
  background(46,139,87)

if(keywentdown(UP_ARROW)){
  writeStock(foodS);
  dog.addimage =("doghappy",doghappyimg) 
} 
  drawSprites();
  Text("foodStock")
  textsize()

}
function readstock(data){
  foodS = data.val();

  function writeStock(x);

  database.ref('/').update({
    Food:x
  })
}

