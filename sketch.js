let objects = [
    "camera",
    "baseplate"
];

let objectTypes = ["point light", "camera", "cube"];

let lastX = 0;
let grids = [];

function Grid(gridX, gridZ) {
    this.x = -100;
    this.z = -100;
    this.size = 20;

    this.show = function() {
        this.x = gridX;
        this.z = gridZ;
        strokeWeight(0.5);
        stroke(128, 128, 128);
        vertex(this.x, 0, this.z);
        vertex(this.x + this.size, 0, this.z);
        vertex(this.x + this.size, 0, this.z);
        vertex(this.x + this.size, 0, this.z + this.size);
        vertex(this.x + this.size, 0, this.z + this.size);
        vertex(this.x, 0, this.z + this.size);
        vertex(this.x, 0, this.z + this.size);
        vertex(this.x, 0, this.z);
        endShape();
    }
}

function createGrid() {
    for(y=0; y <= 7; y++) {
        for(i=0; i <= 7; i++) {
            grids.push(new Grid(i*20 - 80, y*20 - 80));
        }
    }
}

function renderGrid() {
    for(i = 0; i <= grids.length-1; i++) {
        grids[i].show();
    }
}

var grid;

function renderAxis() {
    strokeWeight(1);
	stroke(0, 255, 0);
	beginShape(LINES);
    vertex(-1000, 0, 0);
    vertex(1000, 0, 0);
    endShape();
    stroke(255, 0, 0);
    beginShape(LINES);
    vertex(0, 0, 1000);
    vertex(0, 0, -1000);
    endShape();
    stroke(0, 0, 255)
    beginShape(LINES);
    vertex(0, 1000, 0);
    vertex(0, -1000, 0);
    endShape();
}

function setup() { //Called on the start of the program
    smooth();
    createCanvas(windowWidth, windowHeight, WEBGL);
    createGrid();
}

function draw() { //Called every frame
    background(21, 21, 21);
    //rotateX(frameCount * 0.01);
    //rotateZ(frameCount * 0.01);
    rotateX(-QUARTER_PI);
    rotateY(lastX / 300 + QUARTER_PI);
    
    renderAxis(); //render colorful axis
    
    renderGrid(); //render gray grid at y = 0
}

function mouseDragged() {
    lastX = lastX + movedX * 2;  //set new last X
    return false;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
