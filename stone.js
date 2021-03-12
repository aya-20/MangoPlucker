class stone{
    constructor(x, y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2

        }
        this.image = loadImage("images/stone.png");
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();
    }

}