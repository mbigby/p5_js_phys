class Thing {
  constructor({ pos = new p5.Vector(0,0), vel = new p5.Vector(0,0) } = {}) {
    this.pos = pos.copy()
    this.vel = vel.copy()
    this.r = 10
    this.totalTime = 0
  }
  
  move(acceleration = createVector(0,0)) {
    let dT = deltaTime/1000.0
    this.totalTime += dT
    
    
    this.vel.add(p5.Vector.mult(acceleration, dT))
        
    let deltaP = p5.Vector.mult(this.vel, dT)
    deltaP.add(p5.Vector.mult(acceleration, -dT*dT/2))

    this.pos.add(deltaP)
  }
  
  draw() {
    stroke(0)
    strokeWeight(2)
    fill(255,127)
    ellipse(this.pos.x, this.pos.y, this.r)
  }
}
