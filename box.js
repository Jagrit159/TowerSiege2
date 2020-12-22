class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      if(this.body.speed<8){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
      }
    }
  }