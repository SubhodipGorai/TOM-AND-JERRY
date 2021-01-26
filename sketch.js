var cat_i,mouse_i,g,cat,mouse,gr;
function preload() {
    //load the images here
    cat_i = loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png");
    mouse_i = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
    g = loadImage("garden.png");
    cat_s= loadImage("cat1.png");
    mouse_s= loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat.createSprite(800,400,20,20);
    cat.addImage("cat_i",cat_i);
    cat.addImage("cat_s",cat_s);

    mouse.createSprite(400,400,20,20);
    mouse.addImage("mouse_i",mouse_i);
    mouse.addImage("mouse_s",mouse_s);
    
    gr.createSprite(500,400,200,200);
    gr.addImage("g",g);
}

function draw() {
    background(255);
    keyPressed();
    cat.velocityX = 0;
    drawSprites();
}


function keyPressed(){
if (keyDown("space")) {
    cat.velocityX = -1
}



}
