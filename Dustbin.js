class Dustbin {
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.dustbin = Bodies.rectangle(x,y,width,height,option)
        this.width = width;
        this.height = height;
        World.add(world,this.dustbin)
    }
    display() {
        var pos = this.dustbin.position;
        rectMode(CENTER);
        push();
        strokeWeight(0)
        fill("red")
        rect(pos.x, pos.y, this.width, this.height)
        pop();
    }

}