function preload(){
groundImg = loadImage("assets/ground.jpg")
forestImg=loadImage("assets/forest.jpg")
firstMapImg=loadImage("assets/partofmap.jpg")
randomPlaceImg=loadImage("assets/randomplace.jpg")
villageImg=loadImage("assets/villageinmap.jpg")
secondvillageImage=loadImage("assets/secondvil.jpg")
roadImg=loadImage("assets/road.png")
}


function setup(){
createCanvas(1000,500)
ground=createSprite(500,300,2000,500)
ground.addImage(groundImg)
ground.scale=3

}


function draw(){
background("green")
ground.velocityY=2
if(ground.y>350){
ground.y=300
}
spawnImages();
drawSprites();
}
function spawnImages(){
if(frameCount%250==0){
sprite=createSprite(random(200,800),10,20,20)
sprite.shapeColor="blue"
sprite.velocityY=1
var count=Math.round(random(1,5))
console.log(count)
if(count===1){
    sprite.addImage(forestImg)
}
else if(count===2){
    sprite.addImage(firstMapImg)
}
else if (count===3){
    sprite.addImage(randomPlaceImg)
}
else if (count===4){
    sprite.addImage(villageImg)
}
else {
    sprite.addImage(secondvillageImage)
}

}
}