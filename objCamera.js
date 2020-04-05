function Camera() {
    this.y = 0;
    this.x = 0;
    this.z = 0;
    
    this.rotX = 0;
    this.rotY = 0;
    this.rotZ = 0;

    this.show = function() {
        ellipse(40);
        translate(this.x, this.y, this.z);
    }
}
