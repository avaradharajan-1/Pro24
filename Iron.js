class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 70;
      this.height = 90;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position 
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  