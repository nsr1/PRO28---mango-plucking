class tree{
    constructor(x,y){
       var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x,y,300,300,options)
        this.height = 400
        this.width = 300
        this.image = loadImage("sprites/tree.png")
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