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
    vertex(-100, 0, 0)
    vertex(100, 0, 0)
}
