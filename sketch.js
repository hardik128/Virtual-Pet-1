var happyDogImage, dogImage, database, foodStock ,foodS, dog

function preload(){
	happyDogImage = loadImage("happydog.png");
  dogImage = loadImage("Dog.png");
}

function setup() {
	createCanvas(800, 700);
 
  dog = createSprite(400,300,50,50)
  dog.addImage(dogImage)
  dog.scale=0.2;
  database = firebase.database();
  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  console.log(foodS)
}


function draw() {  
  background(45,205,200)
  if (keyWentDown(UP_ARROW)){ 

    writeStock(foodS);
    
    dog.addImage(happyDogImage)
  }

  textSize(30)
fill(250)
	stroke(0)
	strokeWeight(5)
  text("food:"+ foodS,250,100)
  
  drawSprites();
  //add styles here

  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  
  }
  database.ref('/').update({
  food:x
  })

} 

