class Rope {
    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 10,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var bodyApos=this.rope.bodyA.position;
        var bodyBpos=this.rope.bodyB.position;
        line(bodyApos.x,bodyApos.y,bodyBpos.x,bodyBpos.y);
    }
}