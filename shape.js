// let hue = chroma.hsl(0, 1, 0.5)
// let scale = chroma.scale(["yellow", "blue"])
// let shape = {
//   x: 0,
//   y: 350,
//   w: 100,
//   h: 100,
//   c: [0, 0, 200]
// }
// let tween = p5.tween.manager
//   .addTween(shape, "shapeTween")
//   // .addMotion("w", 12, 1000, "easeInSin")
//   // .addMotion("x", 500, 1000, "easeOutSin")
//   // .addMotions([
//   //   {key: "w", target: 12},
//   //   {key: "x", target: 500}
//   // ], 1000, "easeInSin")
//   // .startLoop() //startTween()

// let huetween = p5.tween.manager
//   .addTween(shape, "shapeTween")

// console.log(p5.tween.manager)
// // HUE 0 ... 360
// // Saturation 0 ... 1
// // Lightness 0 ... 1
// function setup() {
//     createCanvas(600, 600)
//   }
//   function draw() {
//     hue = chroma.hsl(frameCount % 360, 1, 0.5)
//     background(hue.darken(2).rgb())
//     fill(hue.rgb())
//     ellipse(400, 100, 100, 150)

//     fill(scale(0.2).rgb())
//     ellipse(200, 100, 100, 150)

//     noStroke()
//     for(let i = 0; i < width; i++){
//       fill(scale(i/width).rgb())
//       ellipse(i, 250, 50, 50)
//     }

//     fill(shape.c)
//     rect(shape.x, shape.y, shape.w, shape.h)
//   }
  
//   function mouseClicked(){
//     console.log("click")

//     tween.resetMotions()

//     tween
//       .addMotions([
//         {key: "x", target: mouseX},
//         {key: "y", target: mouseY}
//       ], 1000, "easeInOutQuint")
//       // .addMotion("x", mouseX, 100, "easeInSin")
//       // .addMotion("y", mouseY, 100, "easeInSin")
//       .startTween()

//     huetween.resetMotions()
//     huetween
//       .addMotion("c", scale(mouseX/width).rgb(), 1000, "easeInOUtQuint")
//       .startTween()
//   }
//   // chroma.scale(['yellow', 'blue']) 制作渐变色
class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(5, 26);
    this.shrinking = random(0.2, 0.5); // Shrinking rate
  }

  update() {
    // Shrink the bubble
    this.radius -= this.shrinking;
    if (this.radius <= 0) {
      this.radius = 0;
      return true; // Indicate that the bubble has disppeared
    }
    return false;
  }

  show() {
		noStroke()
    fill("#C8C8C8")
    // stroke(255)
    // strokeWeight(random(1, 3))
    ellipse(this.x, this.y, this.radius * 2)
  }
}

let bubbles = []
let nextBubbleTime = 0

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('bubble-background');
  // canvas.style('position', 'fixed');
  // canvas.style('top', '0');
  // canvas.style('left', '0');
  // canvas.style('z-index', '-1');
}

function draw() {
	background(255);
	
	if (frameCount >= nextBubbleTime) {
    let numBubbles = floor(random(9, 23));
		for(let b = 0; b < int(random(0, 5)); b++){
			createBubbles(random(0, width), height, numBubbles)
		}
    
    // 设置下一次创建气泡的时间
    nextBubbleTime = frameCount + int(random(60, 150)); // 随机时间间隔（例如，60到240帧之间）
  }
	
	for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].show();

    if (bubbles[i].radius <= 0 || bubbles[i].y <= 0) {
      bubbles.splice(i, 1);
    } else {
      bubbles[i].y -= 6;
      bubbles[i].x += random(-3, 3);
    }
  }
}

function createBubbles(x, y, number) {
  for (let i = 0; i < number; i++) {
    bubbles.push(new Bubble(x+ random(10, 60), y+ random(-50, 50)));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}