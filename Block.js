class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image1 = loadImage("happyBird.png");
      this.image = loadImage("sadBird.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 3) {
        rectMode(CENTER);
        image(this.image1, this.body.position.x, this.body.position.y, 30, 40);
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 30, 40);
        pop();
        textSize(50);
        fill("Black");
        text("Game Over!", 800,200);
      }
    }
}