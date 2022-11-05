
// ten milliseconds
let thing

function setup() {
  createCanvas(640, 360)

  thing = new Thing({ pos: createVector(100,100) })
  frameRate(50)
}


function draw() {
  background(127)
  thing.move(createVector(0.0, 5))
  thing.draw()
}
