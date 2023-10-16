let hue = chroma.hsl(0, 1, 0.5)
// HUE 0 ... 360
// SAT 0 ... 1
// 
function setup() {
    createCanvas(600, 600)
  }
  function draw() {
    hue = chroma.hsl(frameCount % 360, 1, 0.5)
    background(hue.rgb())
    ellipse(400, 100, 100, 150)
  }
  