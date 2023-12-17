const body=[];
const eye=[];
const deco=[];
const mouth=[];

function preload(){
  for (var i = 0; i < 12; i++){
    body[i] = loadImage('./images/src/body ('+ (i + 1) +').png');
    eye[i] = loadImage('./images/src/eye ('+ (i + 1) +').png');
    deco[i] = loadImage('./images/src/deco ('+ (i + 1) +').png');
    mouth[i] = loadImage('./images/src/mouth ('+ (i + 1) +').png');
  }
  
}

function setup() {
  let canvas = createCanvas(800, 600)
  canvas.parent('canvas-container')
  
  // Outside settings
  let title = document.getElementById('scrolling-title');
  let originalText = title.innerText;
  
  let repeatedText = originalText;
  for (let i = 0; i < 50; i++) {
      repeatedText += ' ' + '♦' + ' ' + originalText;
  }
  
  title.innerText = repeatedText;
}

function draw() {
  if (mouseIsPressed){
    var r = floor(random(12));
    var img = deco[r]
    background("white")
    imageMode(CENTER);
    image(img,400,350, img.width/2, img.height/2);
    var r = floor(random(12));
    var img = body[r]
    image(img,400,350, img.width/2, img.height/2);
    var r = floor(random(12));
    var img = mouth[r]
    image(img,400,350, img.width/2, img.height/2);
    var r = floor(random(12));
    var img = eye[r]
    image(img,400,350, img.width/2, img.height/2);
  }
}