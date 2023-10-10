class ShapeSystem{
  constructor(){
  
  }
  
  createShape(){

  }
  
}
let system = new ShapeSystem()
function setup() {
  createCanvas(600, 600)
  console.log("2 + 2 =", sum(2, 2))
}


function draw() {
  background(200)
  ellipse(200, 100, 100, 150)
}

function sum(a, b) {
  return a + b;
}
