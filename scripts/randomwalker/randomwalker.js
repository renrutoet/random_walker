var walker1 = "";
var count = 0;
var colours = ['rgba(0, 0, 0, 0.2)','rgba(255, 0, 0, 0.2)','rgba(0, 255, 0, 0.2)','rgba(0, 0, 255, 0.2)','rgba(255, 255, 255, 0.2)'];
var currentColour = 0;


function setup() {
    const width = windowWidth;
    const height = windowHeight;

    createCanvas(width,height);
    background(255);
    walker1 = new Walker(width/2,height/2);
    console.log(walker1);

}

function draw (){
    
    count++; 

    if(count % 900 == 0){
        currentColour++;
        if(currentColour % colours.length == 0){
            currentColour = 0;
        }
    }
    console.log(colours[currentColour]);
    fill(color(colours[currentColour]));
    walker1.move();
    walker1.draw();
}

let Walker = function(startX,startY){
    this.position = createVector(startX,startY);
}

Walker.prototype.move = function(){
    let randX = round(random(-2,2));
    let randY = round(random(-2,2));

    this.position.x += randX;
    this.position.y += randY;
}

Walker.prototype.draw = function(){
    noStroke();
    ellipse(this.position.x,this.position.y,2,2);
}