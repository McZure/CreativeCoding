//comment out 快捷键：Ctrl+K 然后 Ctrl+C  uncomment：Ctrl+K 然后 Ctrl+U
// let bg=[0, 0, 0]
// myBool = false
// function callFirst(){
//   console.log("hello, delayed function")
//   bg = [200, 200, 200]
// }
// setTimeout(callFirst, 2000) //延迟2000ms运行function
// setTimeout(() => {console.log("hello, yet again!")
// }, 6000)
// setTimeout(
//   function(){
//     console.log("hello, again!")
//     bg = [100, 100, 100]
//     myBool = true
//   }, 4000)

let request = fetch("https://dog.ceo/api/breeds/image/random")
//ASYNC -> / AWAIT -> wait until a prompt

console.log(request)

function setup() {
  createCanvas(600, 600)
}


function draw() {
  background(bg)
  if(myBool){}
}

async function apiRequest(){
  let request = await fetch("https://dog.ceo/api/breeds/image/random")
  console.log(request)
  let data = request.json()
  console.log(data)
  //imgURL = request.url
}