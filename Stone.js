class Stone{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0,
            fiction:1,
            density:1.2
        }
        this.body = Matter.Bodies.rectangle(x,y,20,20,options)
        this.height = 20
        this.width = 20
        this.image = loadImage("sprites/stone.png")
        World.add(world, this.body);
    }

    display(){
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}