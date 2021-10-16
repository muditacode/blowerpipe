class Ball {
    constructor(x, y, width, height) {
      var options = {
      restituion:0.8
      };
      
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse( 0, 0, this.width, this.height);
      pop();
    }
  }
  