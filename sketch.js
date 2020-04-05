let objects = [
    "camera",
    "baseplate"
];

let objectTypes = ["point light", "camera", "cube"];

let lastX = 0;

function setup() { //Called on the start of the program
    smooth();
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() { //Called every frame
    background(21, 21, 21);
    //rotateX(frameCount * 0.01);
    //rotateZ(frameCount * 0.01);
    rotateX(-QUARTER_PI);
    rotateY(lastX / 100 + QUARTER_PI);
	strokeWeight(1);
	stroke(0, 255, 0);
	beginShape(LINES);
    vertex(-300, 0, 0);
    vertex(300, 0, 0);
    endShape();
    stroke(255, 0, 0);
    beginShape(LINES);
    vertex(0, 0, 300);
    vertex(0, 0, -300);
    endShape();
    stroke(0, 0, 255)
    beginShape(LINES);
    vertex(0, 300, 0);
    vertex(00, -300, 0);
    endShape();
}

function mouseDragged() {
    lastX = lastX + movedX * 2;  //set new last X
    return false;
}
