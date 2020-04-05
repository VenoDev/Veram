let objects = [
    "camera",
    "baseplate"
];

let objectTypes = ["point light", "camera", "cube"];

function setup() { //Called on the start of the program
    smooth();
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() { //Called every frame
    strokeWeight(3);
    stroke(237, 34, 93);
    beginShape(LINES);
    vertex(-100, 0, 0);
    vertex(100, 0, 0);
    endShape();
}
