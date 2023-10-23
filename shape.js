let hue = chroma.hsl(0, 1, 0.5)
let scale = chroma.scale(["yellow", "blue"])
let shape = {
  x: 0,
  y: 350,
  w: 100,
  h: 100,
  c: [0, 0, 200]
}
let tween = p5.tween.manager
  .addTween(shape, "shapeTween")
  // .addMotion("w", 12, 1000, "easeInSin")
  // .addMotion("x", 500, 1000, "easeOutSin")
  // .addMotions([
  //   {key: "w", target: 12},
  //   {key: "x", target: 500}
  // ], 1000, "easeInSin")
  // .startLoop() //startTween()

let huetween = p5.tween.manager
  .addTween(shape, "shapeTween")

console.log(p5.tween.manager)
// HUE 0 ... 360
// Saturation 0 ... 1
// Lightness 0 ... 1
function setup() {
    createCanvas(600, 600)
  }
  function draw() {
    hue = chroma.hsl(frameCount % 360, 1, 0.5)
    background(hue.darken(2).rgb())
    fill(hue.rgb())
    ellipse(400, 100, 100, 150)

    fill(scale(0.2).rgb())
    ellipse(200, 100, 100, 150)

    noStroke()
    for(let i = 0; i < width; i++){
      fill(scale(i/width).rgb())
      ellipse(i, 250, 50, 50)
    }

    fill(shape.c)
    rect(shape.x, shape.y, shape.w, shape.h)
  }
  
  function mouseClicked(){
    console.log("click")

    tween.resetMotions()

    tween
      .addMotions([
        {key: "x", target: mouseX},
        {key: "y", target: mouseY}
      ], 1000, "easeInOutQuint")
      // .addMotion("x", mouseX, 100, "easeInSin")
      // .addMotion("y", mouseY, 100, "easeInSin")
      .startTween()

    huetween.resetMotions()
    huetween
      .addMotion("c", scale(mouseX/width).rgb(), 1000, "easeInOUtQuint")
      .startTween()
  }
  // chroma.scale(['yellow', 'blue']) 制作渐变色