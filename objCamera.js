function Camera() {
    this.y = 0;
    this.x = 0;
    this.z = 0;

    this.show = function() {
        ellipse(40);
        translate(this.x, this.y, this.z);
    }
}
