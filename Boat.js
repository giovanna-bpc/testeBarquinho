class boat{
    constructor(x, y, width, height, boatPos){
        this.body = bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.image = loadImage ("./assets/boat.png");
        this.boatPosition = boatPos;
        world.add (world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var position = this.body.position;

        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, thisboatPosition, this.width, this.height);
        pop();
    }    
}