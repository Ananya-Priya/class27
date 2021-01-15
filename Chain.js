class Chain{

    constructor(body1,body2){
        var options=
    {
        bodyA: body1,
        bodyB: body2,
        stiffness: 0.4,
        length: 10
    }
    
    this.chain=Constraint.create(options);
    World.add(world,this.chain); 
    }

    display(){
        var A=this.chain.bodyA.position;
        var B=this.chain.bodyB.position;
        line(A.x,A.y,B.x,B.y)
    }
}