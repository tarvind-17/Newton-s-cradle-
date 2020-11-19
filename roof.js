class Roof {
    constructor() {
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(width/2,100,width-200,20,options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey");
        strokeWeight(3);
        stroke("white");
        rect(pos.x,pos.y,width-200,20);
    }
}