class Plucker{
    constructor(a, point){
        this.bodyA = a;
        this.pointB = point;
        var options={
            bodyA: a,
            pointB: point,
            length: 7,
            stiffness: 0.3
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        
       

    }
     
    Fly(){
      this.chain.bodyA = null;
    }
    
    display(){
        if (this.chain.bodyA !== null){

        
        var Apos = this.chain.bodyA.position;
        var Bpoint = this.pointB;
        line(Apos.x, Apos.y, Bpoint.x, Bpoint.y);
        }   
    }

    

}
