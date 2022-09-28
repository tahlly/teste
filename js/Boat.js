class Boat {
  constructor(x, y, width, height,boatPos) {
    var options = {
      restitution:0.8,
      friction: 1.0,
      density: 1.0
    };

    this.boatPosition = boatPos; 
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    
    this.image = loadImage("assets/boat.png");
    
    World.add(world, this.body);
  }


  display() {
   
    var pos = this.body.position;
    var angle = this.body.angle; 

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
    
  }
}
