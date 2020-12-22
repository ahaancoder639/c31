class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smage = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    var position = [this.body.position.x,this.body.position.y]
    if(this.body.position.x>200){
    this.trajectory.push(position)
    }
    console.log(this.trajectory);
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    for (var i = 0; i < this.trajectory.length; i++) {
   image(this.smage,this.trajectory[i] [0] ,this.trajectory[i] [1]);
    }
    
    super.display();
  }
}
