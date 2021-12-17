class hero{
    constructor(x,y){
        var options = {
            isStatic:false
        }
    this.body = Bodies.rectangle(x,y,800,400,options)
    
    World.add(world,this.body)
    
    this.image = loadImage("BOI.png")

}
  show(){
      var pos = this.body.position;

      pos.x = mouseX;
      pos.y = mouseY;

      //console.log(pos);

      image(this.image,pos.x,pos.y,120,120);
  }
}