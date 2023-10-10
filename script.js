let bg=[0, 0, 0]
myBool = false

function callFirst(){
  console.log("hello, delayed function")
  bg = [200, 200, 200]
}
setTimeout(callFirst, 2000) //延迟2000ms运行function

setTimeout(
  function(){
    console.log("hello, again!")
    bg = [100, 100, 100]
    myBool = true
  }, 4000)
function setup() {
  createCanvas(600, 600)
}


function draw() {
  background(bg)
  if(myBool){}
}
