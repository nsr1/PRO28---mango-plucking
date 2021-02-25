class mango{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.body = Matter.Bodies.rectangle(x,y,20,20,options)
        this.height = 20
        this.width = 20
        this.image = loadImage("sprites/mango.png")
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}