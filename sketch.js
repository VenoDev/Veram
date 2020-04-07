//Core of Veram game engine
//distributed under GNU GPLv3 license

function preload() {
    //for example textures, shaders and videos are preloaded inside this function
}

var grid;
var saveResources = false;
let objects = new DrawBox();
let objectTypes = ["point light", "camera", "cube"];
let lastX = 0;
let grids = [];
let zoom = 0;

function Grid(gridX, gridZ) {
    this.x = -100;
    this.z = -100;
    this.size = 100;

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
    let amount = 5;
    let size = 100;
    for(y=0; y <= amount; y++) {
        for(i=0; i <= amount; i++) {
            grids.push(new Grid(i*size - (((amount*size) / 2) - size / 2) - size, y*size - (((amount*size) / 2) - size / 2) - size));
        }
    }
}

function renderGrid() {
    for(i = 0; i <= grids.length-1; i++) {
        grids[i].show();
    }
}

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
    cnv = createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cnv.mouseWheel(changeSize); //listener for mouse wheel
    createGrid();
    cam.move(0, 0, -420);
}

function DrawBox() {
    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.xS = 0;
    this.yS = 0;
    this.zS = 0;

    this.render = function(objX, objY, objZ, sizeX, sizeY, sizeZ, color, stroke) {
        this.x = objX;
        this.y = objY;
        this.z = objZ;

        this.xS = sizeX;
        this.yS = sizeY;
        this.zS = sizeZ;
        //stroke('rgba(0,255,0,0.25)'); WHY THAT DOESN'T WORK
        strokeWeight(stroke);
        fill(color);
        translate(this.x, -this.y, this.z);
        box(this.xS, this.yS, this.zS);
        translate(-this.x, this.y, -this.z);
    }
}

//objects.push(new Grid());

function draw() { //Called every frame
    background(21, 21, 21);
    //rotateX(frameCount * 0.01);
    //rotateZ(frameCount * 0.01);
    rotateX(-QUARTER_PI);
    rotateY(lastX / 300 + QUARTER_PI);
    
    renderAxis(); //render colorful axis
    if(!saveResources) {
        renderGrid(); //render gray grid at y = 0
    }
    objects.render(300, 150, -250, 50, 300, 50, "#255565", 0);
    objects.render(300, 150, -50, 50, 300, 50, "#255565", 0);
    objects.render(300, 150, -150, 50, 50, 150, "#255565", 0);
    objects.render(300, 100, 150, 50, 200, 50, "#255565", 0);
    objects.render(300, 275, 150, 50, 50, 50, "#255565", 0);
    //renderObjects(); //render objects by their list
}

function mouseDragged() {
    lastX = lastX + movedX * 2;  //set new last X
    return false;
}

function mouseWheel() {
    cam.move(0, 0, zoom); //zooming
}

function changeSize(event) {
    if (event.deltaY > 0) {
        zoom = 30;
    } else {
        zoom = -30;
    }
}
