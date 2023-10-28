let rain
let temp
let snowfall
let wind
let isDay
let cloud
let temp_unit

class axolotl{
  constructor(x, y){
    this.x = x
    this.y = y
  }

  // function used to construct the face, primarily by changing colors to create differences.
  // parameter is an array containing RGB information
  face(_clr){
    noStroke()
    fill(_clr[0], _clr[1], _clr[2])
    rect(this.x-100, this.y-100, 200, 200, 78, 78, 50, 50)
  }
  
  // function used to construct the gill section, primarily by changing shapes and colors to create differences
  gill(gill_type, _clr1, _clr2, face_clr){
    noStroke()
    fill(_clr1[0],_clr1[1],_clr1[2])
    var hue = chroma.hsl(frameCount % 360, 1, 0.8)
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    if (gill_type%7 == 0){
      // 1st type of gill
      // >(0_0)<
      beginShape()
      vertex(this.x-80, this.y)
      vertex(this.x-120 + slight_Xm, this.y-40 + 1.6*slight_Ym)
      vertex(this.x-140 + slight_Xm, this.y-20 + slight_Ym)
      vertex(this.x-120, this.y + slight_Ym)
      vertex(this.x-140 + slight_Xm, this.y+20 + slight_Ym)
      vertex(this.x-120 + slight_Xm, this.y+40 + 1.6*slight_Ym)
      endShape()
      beginShape()
      vertex(this.x+80, this.y)
      vertex(this.x+120 + slight_Xm, this.y-40 + 1.6*slight_Ym)
      vertex(this.x+140 + slight_Xm, this.y-20 + slight_Ym)
      vertex(this.x+120, this.y + slight_Ym)
      vertex(this.x+140 + slight_Xm, this.y+20 + slight_Ym)
      vertex(this.x+120 + slight_Xm, this.y+40 + 1.6*slight_Ym)
      endShape()
    }
    else if(gill_type%7 == 1){
      // 2nd type of gill
      // ≡(0_0)≡
      quad(this.x-168 + slight_Xm, this.y-30, this.x+168 - slight_Xm, this.y-30, this.x+152 - slight_Xm, this.y-10, this.x-152 + slight_Xm, this.y-10)
      quad(this.x-150 - slight_Xm, this.y+28, this.x+150 + slight_Xm, this.y+28, this.x+166 + slight_Xm, this.y+10, this.x-166 - slight_Xm, this.y+10)
      fill(_clr2[0],_clr2[1],_clr2[2])
      quad(this.x-140 - slight_Xm, this.y-9, this.x+140 + slight_Xm, this.y-9, this.x+124 + slight_Xm, this.y+9, this.x-124 - slight_Xm, this.y+9)
    }
    else if(gill_type%7 == 2){
      // 3rd type of gill
      // ⋙(0_0)⋘
      push()
      translate(this.x, this.y)
      var angle1 = map(mouseY, -height/2, height/2, -2*PI/10, PI/10, true)
      rotate(angle1)
      stroke(_clr1[0],_clr1[1],_clr1[2])
      strokeWeight(19)
      line(-200, 0, 0, 0)
      noStroke()
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(-110, 0, -170, -50, -170, 50)
      fill(_clr2[0],_clr2[1],_clr2[2])
      triangle(-140, 0, -190, -40, -190, 40)
      fill(face_clr[0],face_clr[1],face_clr[2])
      quad(-160, 0, -190, -18, -220, 0, -190, 18)
      pop()

      push()
      translate(this.x, this.y)
      var angle2 = map(mouseY, -height/2, height/2, 2*PI/10, -PI/10, true)
      rotate(angle2)
      stroke(_clr1[0],_clr1[1],_clr1[2])
      strokeWeight(19)
      line(200, 0, 0, 0)
      noStroke()
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(110, 0, 170, -50, 170, 50)
      fill(_clr2[0],_clr2[1],_clr2[2])
      triangle(140, 0, 190, -40, 190, 40)
      fill(face_clr[0],face_clr[1],face_clr[2])
      quad(160, 0, 190, -18, 220, 0, 190, 18)
      pop()
    }
    else if(gill_type%7 == 3){
      // 4th type of gill
      // ◖(0_0)◗
      ellipse(this.x+80, this.y+slight_Ym, 120+2*slight_Xm)
      ellipse(this.x-80, this.y+slight_Ym, 120+2*slight_Xm)
      stroke(face_clr[0],face_clr[1],face_clr[2])
      strokeWeight(5)
      push()
      translate(this.x, this.y)
      rotate(PI/20)
      line(115, slight_Ym, -116, slight_Ym)
      rotate(-2*PI/20)
      line(115, slight_Ym, -116, slight_Ym)
      pop()
      line(119+this.x, this.y+slight_Ym, -119+this.x, this.y+slight_Ym)
    }
    else if(gill_type%7 == 4){
      // 5th type of gill
      // ◥(0_0)◤
      push()
      translate(this.x, this.y)
      rotate(PI/15)
      triangle(-180 + slight_Xm, -50 + slight_Ym, -10, -50, -10, 0)
      fill(_clr2[0],_clr2[1],_clr2[2])
      triangle(-200 + slight_Xm, 0 + slight_Ym, -10, -25, -10, 25)
      fill(_clr2[0],_clr2[1],_clr2[2])
      fill(face_clr[0],face_clr[1],face_clr[2])
      triangle(-160 + slight_Xm, 50 + slight_Ym, -10, 50, -10, 0)

      rotate(-2*PI/15)
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(180 + slight_Xm, -50 + slight_Ym, 10, -50, 10, 0)
      fill(_clr2[0],_clr2[1],_clr2[2])
      triangle(200 + slight_Xm, 0 + slight_Ym, 10, -25, 10, 25)
      fill(face_clr[0],face_clr[1],face_clr[2])
      triangle(160 + slight_Xm, 50 + slight_Ym, 10, 50, 10, 0)
      pop()
    }
    else if(gill_type%7 == 5){
      // 6th type of gill
      // ►(0_0)◄
      push()
      translate(this.x, this.y)
      fill(hue.rgb())
      triangle(0, 0, -190 + slight_Xm, -45+ slight_Ym, -170+ slight_Xm, -80)
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(0, 0, -200 + slight_Xm, -20+ slight_Ym, -200+ slight_Xm, 20)
      hue = chroma.hsl(20+frameCount % 360, 1, 0.8)
      fill(hue.rgb())
      triangle(0, 0, -190 + slight_Xm, 40+ slight_Ym, -170+ slight_Xm, 70)

      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(0, 0, 190 + slight_Xm, -45+ slight_Ym, 170+ slight_Xm, -80)
      hue = chroma.hsl(40+frameCount % 360, 1, 0.8)
      fill(hue.rgb())
      triangle(0, 0, 200 + slight_Xm, -20+ slight_Ym, 200+ slight_Xm, 20)
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(0, 0, 190 + slight_Xm, 40+ slight_Ym, 170+ slight_Xm, 70)
      pop()
    }
    else if(gill_type%7 == 6){
      // 7th type of gill
      // ʚ(0_0)ɞ
      push()
      translate(this.x, this.y)
      beginShape()
      vertex(-80, -70)
      bezierVertex(-100, -120, -220+ slight_Xm, -120, -150 + slight_Xm, -40+slight_Ym)
      bezierVertex(-200, -30, -150+ slight_Xm, 70, -80, 80);
      endShape(CLOSE)
      vertex(80, -70)
      bezierVertex(100, -120, 220+ slight_Xm, -120, 150 + slight_Xm, -40+slight_Ym)
      bezierVertex(200, -30, 150+ slight_Xm, 70, 80, 80);
      endShape(CLOSE)
      fill(_clr2[0],_clr2[1],_clr2[2])
      rotate(-PI/5)
      ellipse(-90, -40, 50+slight_Ym, 80+slight_Xm)
      ellipse(-50, -90, 60+slight_Ym, 90+slight_Xm)
      rotate(2*PI/5)
      ellipse(90, -40, 50+slight_Ym, 80+slight_Xm)
      ellipse(50, -90, 60+slight_Ym, 90+slight_Xm)
      pop()
    }
  }
  
  eyes(eyes_type, _clr, face_clr){
    noStroke()
    var hue = chroma.hsl(frameCount % 360, 1, 0.8)
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    var toEyeDist = dist(mouseX, mouseY, this.x, this.y)
    // *Use this variable to calculate the highlight size in the eyes
    var highlight = min(dist(mouseX, mouseY, width, 0), dist(mouseX, mouseY, 0, height), dist(mouseX, mouseY, 0, 0), dist(mouseX, mouseY, height, width))
    
    if(eyes_type%10 == 0){
      // 1st type of eyes
      // Peaceful eyes
      // (⊝⊝)
      push()
      translate(this.x, this.y)
      fill("white")
      circle(-30, -20, 60)
      circle(30, -20, 60)
      fill(_clr[0], _clr[1], _clr[2])
      rect(-46+slight_Xm, -26+slight_Ym, 35, 23 - toEyeDist/50)
      rect(10+slight_Xm, -26+slight_Ym, 35, 23 - toEyeDist/50)
      pop()
    }
    else if(eyes_type%10 == 1){
      // 2nd type of eyes
      // Cat eyes
      // (◉◉)
      push()
      translate(this.x, this.y)
      fill("white")
      circle(-30, -20, 60)
      circle(30, -20, 60)
      fill(_clr[0], _clr[1], _clr[2])
      ellipse(-28+slight_Xm, -20+slight_Ym, 40 -toEyeDist/20, 40)
      ellipse(28+slight_Xm, -20+slight_Ym, 40 -toEyeDist/20, 40)    
      fill("white")
      ellipse(-30+slight_Xm, -25+slight_Ym, highlight/30)
      ellipse(30+slight_Xm, -25+slight_Ym, highlight/30)
      pop()
    }
    else if(eyes_type%10 == 2){
      // 3rd type of eyes
      // Big eyes
      // (⋒ ⋒)
      push()
      translate(this.x, this.y)
      fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
      rect(-76+slight_Xm, -76+slight_Ym, 66, 95-toEyeDist/50, 100, 15, 10, 10)
      rect(9+slight_Xm, -76+slight_Ym, 66, 95-toEyeDist/50, 15, 100, 10, 10)
      fill("white")
      rect(-65+slight_Xm, -70+slight_Ym, 56, 90-toEyeDist/50, 100, 15, 10, 10)
      rect(9+slight_Xm, -70+slight_Ym, 56, 90-toEyeDist/50, 15, 100, 10, 10)
      fill(_clr[0], _clr[1], _clr[2])
      rect(-45+slight_Xm*2, -50+slight_Ym*2, 25, 60-toEyeDist/30, 10, 10, 10, 10)
      rect(25+slight_Xm*2, -50+slight_Ym*2, 25, 60-toEyeDist/30, 10, 10, 10, 10)
      fill("white")
      ellipse(-35+slight_Xm, -35+slight_Ym, 10)
      ellipse(35+slight_Xm, -35+slight_Ym, 10)
      pop()
    }
    else if(eyes_type%10 == 3){
      // 4th type of eyes
      // Cynical eyes
      // (￢ ￢)
      push()
      translate(this.x, this.y)
      stroke(face_clr[0],face_clr[1],face_clr[2])
      strokeWeight(3)
      fill("white")
      ellipse(-35, -40, 85, 60)
      ellipse(35, -40, 85, 60)
      noStroke()
      fill(_clr[0], _clr[1], _clr[2])
      rect(-50+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
      rect(20+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
      noStroke()
      fill(face_clr[0],face_clr[1],face_clr[2])
      rect(-82, -72, 165, 30, 10, 10, 0, 0)
      pop()
    }
    else if(eyes_type%10 == 4){
      // 5th type of eyes
      // Cyclops
      // ( ◕ )
      push()
      translate(this.x, this.y)
      fill("white")
      ellipse(0, -30, 100)
      fill(_clr[0], _clr[1], _clr[2])
      ellipse(0+slight_Xm, -20+slight_Ym, 60)
      fill("white")
      ellipse(10+slight_Xm, -30+slight_Ym, 30-toEyeDist/30)
      fill(face_clr[0],face_clr[1],face_clr[2])
      ellipse(-20, -70, 60)
      pop()
    }
    else if(eyes_type%10 == 5){
      // 6th type of eyes
      // Eyes behind glasses
      // (〄〄)
      push()
      translate(this.x, this.y)
      fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
      ellipse(-35, -40, 85, 60)
      ellipse(35, -40, 85, 60)
      fill(_clr[0]+toEyeDist/10, _clr[1]+toEyeDist/10, _clr[2]+toEyeDist/10)
      rect(-50+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
      rect(20+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
      // Glasses
      fill(_clr[0], _clr[1], _clr[2])
      ellipse(-40-slight_Xm, -30-toEyeDist/10, 80)
      ellipse(40-slight_Xm, -30-toEyeDist/10, 80)
      fill(face_clr[0]+60,face_clr[1]+60,face_clr[2]+60)
      ellipse(-40-slight_Xm, -30-toEyeDist/10, 60)
      ellipse(40-slight_Xm, -30-toEyeDist/10, 60)
      fill("#FBFBFB")
      rect(-60-slight_Xm, -45-toEyeDist/10, 5, 20)
      rect(20-slight_Xm, -45-toEyeDist/10, 5, 20)
      rect(-60-slight_Xm, -20-toEyeDist/10, 5, 5)
      rect(20-slight_Xm, -20-toEyeDist/10, 5, 5)
      pop()
    }
    else if(eyes_type%10 == 6){
      // 7th type of eyes
      // Electronic eyes
      // (▦▦)
      push()
      translate(this.x, this.y)
      for(var i = 0; i < 30; i+= 1){
        for(var j = 0; j < 14; j+= 1){
          hue = chroma.hsl(i+j+frameCount % 360, 0.5, 0.7)
          fill(hue.rgb())
          rect(-75+i*5, -55+j*5, 5, 5)
        }
      }
      
      
      // Weather
      if(toEyeDist < 30){
        if(weather){
          // The eyes will show current weather
          if(rain){
            hue = chroma.hsl(180+frameCount % 60, 1, 0.7)
            fill(hue.rgb())
            textSize(70)
            text("☂", -30, 5)
          }
          else if(!rain && !snowfall && cloud >= 50){
            hue = chroma.hsl(60+frameCount % 60, 1, 0.7)
            fill(hue.rgb())
            textSize(70)
            text("☁", -30, 5)
          }
          else if(snowfall){
            hue = chroma.hsl(120+frameCount % 60, 1, 0.7)
            fill(hue.rgb())
            textSize(70)
            text("❄", -30, 5)
          }
          else{
            hue = chroma.hsl(frameCount % 60, 1, 0.7)
            fill(hue.rgb())
            textSize(70)
            text("☀", -30, 5)
          }
        }
        else{
          hue = chroma.hsl(frameCount % 360, 1, 0.7)
          fill(hue.rgb())
          //fill(_clr[0] + random(0, 50), _clr[1]+ random(0, 50), _clr[2]+ random(0, 50))
          textFont(myFont1, 60)
          text("CC", -45, 5)
        }
      }
      else if(dist(mouseX, mouseY, this.x, this.y-150) < 60 && weather){
      }
      else{
        // Eyebrows
        rect(-60+slight_Xm, -45+slight_Ym, 10, 10)
        rect(-50+slight_Xm, -50+slight_Ym, 20, 10)
        rect(30+slight_Xm, -50+slight_Ym, 20, 10)
        rect(50+slight_Xm, -45+slight_Ym, 10, 10)
        // Eyes
        fill("white")
        rect(-40+slight_Xm, -30+slight_Ym, 10, 30)
        rect(30+slight_Xm, -30+slight_Ym, 10, 30)
      }
      fill(face_clr[0]-20,face_clr[1]-20,face_clr[2]-20)
      ellipse(-73, -20, 40, 75)
      ellipse(73, -20, 40, 75)
      fill(face_clr[0],face_clr[1],face_clr[2])
      ellipse(-76, -20, 38, 80)
      ellipse(76, -20, 38, 80)
      pop()
    }
    else if(eyes_type%10 == 7){
      // 8th type of eyes
      // Three eyes
      // ( ∴ )
      push()
      translate(this.x, this.y)
      fill('white')
      ellipse(-40, -20, 50)
      ellipse(40, -20, 50)
      fill(_clr[0], _clr[1], _clr[2])
      ellipse(-40+slight_Xm, -20+slight_Ym, 30)
      ellipse(40+slight_Xm, -20+slight_Ym, 30)
      fill('white')
      ellipse(-40+slight_Xm, -20+slight_Ym, 5+ toEyeDist/100)
      ellipse(40+slight_Xm, -20+slight_Ym, 5+ toEyeDist/100)
      fill(face_clr[0], face_clr[1], face_clr[2])
      push()
      rotate(-PI/12+map(toEyeDist, 0, 500, 0, PI/12))
      ellipse(-35+slight_Xm, -50+slight_Ym, 65+slight_Xm, 35)
      pop()
      push()
      rotate(PI/12-map(toEyeDist, 0, 500, 0, PI/12))
      ellipse(35+slight_Xm, -50+slight_Ym, 65+slight_Xm, 35)
      pop()

      fill('white')
      ellipse(0, -50, 50-toEyeDist/80)
      if(toEyeDist < 60){
        for(var i=0; i <10; i++){
          // Halo
          push()
          translate(0, -50)
          rotate(i*PI/10)
          fill(250, 244, 210, 500)
          ellipse(0, 0, 33 + random(0, 10), 33)
          pop()
        }
        fill('#DEAB4E')
        ellipse(0+slight_Xm, -50+slight_Ym, 30-toEyeDist/80+random(0, 3))
        fill(240, 240, 210, 50)
        ellipse(0+slight_Xm, -50+slight_Ym, 23-toEyeDist/80+random(0, 3))
        
      }
      else{
        fill(_clr[1], _clr[0], _clr[2])
        ellipse(0+slight_Xm, -50+slight_Ym, 30-toEyeDist/80)
      }
      fill('white')
      ellipse(0, -50, 6)
      fill(face_clr[0], face_clr[1], face_clr[2])
      ellipse(0+slight_Xm, -70+slight_Ym, 60+slight_Xm, 40)
      pop()
    }
    else if(eyes_type%10 == 8){
      // 9th type of eyes
      // Evil eyes
      // (◣◢)
      push()
      translate(this.x, this.y)
      fill(_clr[0],_clr[1], _clr[2])
      ellipse(-40+slight_Xm, -30+slight_Ym, 65, 60)
      ellipse(40+slight_Xm, -30+slight_Ym, 65, 60)
      fill(_clr[0]+15,_clr[1]+12, _clr[2]+12)
      ellipse(-40, -30, 50)
      ellipse(40, -30, 50)
      fill(_clr[0]+30,_clr[1]+24, _clr[2]+24)
      ellipse(-40-slight_Xm, -30-slight_Ym, 40)
      ellipse(40-slight_Xm, -30-slight_Ym, 40)
      fill(_clr[0]+45,_clr[1]+36, _clr[2]+36)
      ellipse(-40, -30, 30)
      ellipse(40, -30, 30)
      fill('#FBFBFB')
      ellipse(-40+slight_Xm, -30+slight_Ym, 20, 40)
      ellipse(40+slight_Xm, -30+slight_Ym, 20, 40)
      fill(_clr[0]+50,_clr[1]+45, _clr[2]+45)
      ellipse(-40+slight_Xm, -30+slight_Ym, 10, 30)
      ellipse(40+slight_Xm, -30+slight_Ym, 10, 30)
      
      fill(face_clr[0], face_clr[1], face_clr[2])
      push()
      rotate(PI/12)
      rect(-85,-60, 78,40)
      pop()
      push()
      rotate(-PI/12)
      rect(7,-60, 78,40)
      pop()
      pop()
    }
    else if(eyes_type%10 == 9){
      // 10th type of eyes
      // Yinyang eyes
      // (☯)
      push()
      translate(this.x, this.y)
      fill(_clr[0], _clr[1], _clr[2])
      rect(-80,-40, 70,40, 0, 100, 0, 100)
      fill('white')
      rect(-75+slight_Xm/5,-35, 55,30, 0, 100, 0, 100)
      fill(255-_clr[0], 255-_clr[1], 255-_clr[2])
      rect(10,-40, 70,40, 100, 0, 100, 0)
      fill('white')
      rect(20+slight_Xm/5,-35, 55,30, 100, 0, 100, 0)
      fill(255-_clr[0], 255-_clr[1], 255-_clr[2])
      ellipse(-45+slight_Xm, -20+slight_Ym/2, 24, 23)
      fill(_clr[0], _clr[1], _clr[2])
      ellipse(45+slight_Xm, -20+slight_Ym/2, 24, 23)
      fill('white')
      ellipse(-45+slight_Xm/2, -22+slight_Ym, 5)
      ellipse(45+slight_Xm/2, -22+slight_Ym, 5)
      pop()
    }
  }
  
   mouth(mouth_type, _clr, face_clr){
    noStroke()
    fill(_clr[0], _clr[1], _clr[2])
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    var toEyeDist = dist(mouseX, mouseY, this.x, this.y)
    if(mouth_type%7 == 0){
      push()
      translate(this.x, this.y)
      rect(-40, 40, 80, 40, 10)
      fill(face_clr[0]+20,face_clr[1]+20,face_clr[2]+20)
      ellipse(0, 37+slight_Ym, 80, 42)
      fill(face_clr[0],face_clr[1],face_clr[2])
      ellipse(0, 40+slight_Ym, 90, 40)
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(-9, 40+slight_Ym, -7+toEyeDist/300, 42+slight_Ym)
      line(9, 40+slight_Ym, 7-toEyeDist/300 , 42+slight_Ym)
      pop()
    }
    else if(mouth_type%7 == 1){
      push()
      translate(this.x, this.y)
      ellipse(30, 50+slight_Ym, 86, 50)
      ellipse(-30, 50+slight_Ym, 86, 50)
      fill(face_clr[0],face_clr[1],face_clr[2])
      rect(-80, 60, 160, 30)
      pop()
    }
    else if(mouth_type%7 == 2){
      push()
      translate(this.x, this.y)
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(-10, 50+slight_Ym, -6+toEyeDist/300, 53+slight_Ym)
      line(10, 50+slight_Ym, 6-toEyeDist/300 , 53+slight_Ym)
      strokeWeight(8)
      line(-60, 65+slight_Ym/2, 60, 65+slight_Ym/2)
      pop()
    }
    else if(mouth_type%7 == 3){
      noFill();
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(this.x-9, this.y+40+slight_Ym, this.x-7+toEyeDist/300, this.y+42+slight_Ym)
      line(this.x+9, this.y+40+slight_Ym, this.x+7-toEyeDist/300 , this.y+42+slight_Ym)
      stroke(_clr[0], _clr[1], _clr[2]);
      strokeWeight(8)
      arc(this.x, this.y+20, 130+slight_Xm, 110+slight_Ym, radians(25), radians(140), OPEN)
    }
    else if(mouth_type%7 == 4){
      push()
      translate(this.x, this.y)
      quad(0, 20+slight_Ym, -50-slight_Xm, 40, 0, 60+slight_Ym, 50-slight_Xm, 40)
      fill(_clr[0]+12, _clr[1]+14, _clr[2]+16)
      quad(0, 55+slight_Ym, -50-slight_Xm, 40, 0, 60+slight_Ym, 50-slight_Xm, 40)
      stroke(face_clr[0],face_clr[1],face_clr[2])
      strokeWeight(4)
      line(-10, 24+slight_Ym, -10+toEyeDist/300, 27+slight_Ym)
      line(10, 24+slight_Ym, 10-toEyeDist/300 , 27+slight_Ym)
      pop()
    }
    else if(mouth_type%7 == 5){
      push()
      translate(this.x, this.y)
      fill(_clr[0]+15,_clr[1]+10,_clr[2]+10)
      ellipse(0, 60+slight_Ym, 45, 20-toEyeDist/50)
      fill(_clr[0],_clr[1],_clr[2])
      ellipse(18, 40+slight_Ym, 45, 50)
      ellipse(-18, 40+slight_Ym, 45, 50)
      fill(face_clr[0],face_clr[1],face_clr[2])
      ellipse(18, 32+slight_Ym, 50, 50)
      ellipse(-18, 32+slight_Ym, 50, 50)
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(-10, 30+slight_Ym, -6+toEyeDist/300, 33+slight_Ym)
      line(10, 30+slight_Ym, 6-toEyeDist/300 , 33+slight_Ym)
      pop()
    }
    else if(mouth_type%7 == 6){
      push()
      translate(this.x, this.y)
      rect(-60+slight_Xm, 40+slight_Ym, 120, 20, 5)
      stroke(_clr[0]-10, _clr[1]-10, _clr[2]-10)
      strokeWeight(9-toEyeDist/100)
      line(-48+slight_Xm, 50+slight_Ym/2, 48+slight_Xm, 50+slight_Ym/2)
      pop()
    }
  }
  
  showWeather(weather, eyes_type){
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    push()
    translate(this.x, this.y)
    if(weather){
      if (isDay){
        for(var i=0; i <100; i++){
          // Halo of the sun
          push()
          translate(0, -150)
          rotate(i*PI/100)
          fill(250, 244, 210, 500)
          ellipse(0, 0, 66 + random(0, 20), 66)
          pop()
        }
        for(i=0; i <10; i++){
          // The sun
          fill(220+i*4, 152, 54-2*i, 80)
          ellipse(0, -150, 70-4*i)
        }
      }
      else{
        for(var i=0; i <20; i++){
          // Halo of the moon
          fill(242, 226-i, 172, 9+i)
          ellipse(0, -150, 90-i+random(0, 3), 90-i+random(0, 3))
        }
        for(i=0; i <20; i++){
          // The moon
          fill(243+i*2, 228, 143-2*i, 100-i)
          ellipse(0, -150, 70-2*i)
        }
        // Dark part of the moon
        fill(185, 156, 84, 80)
        ellipse(10, -150, 53)
        fill(185, 156, 84, 90)
        ellipse(10, -150, 50)
      }
      // Show temperature
      if(dist(mouseX, mouseY, this.x, this.y-150) < 60 && eyes_type%10 == 6){
        fill("white")
        textFont(myFont1, 40)
        if(temp >= 100 || temp <= -10){
          textFont(myFont1, 30)
          text(str(int(temp)),-48, -8)
          textFont(myFont1, 20)
          text(str(temp_unit), 20, -20)
        }
        else if(temp >= 0 && temp <10){
          textFont(myFont1, 48)
          text(str(int(temp)),-24, -4)
          textFont(myFont1, 25)
          text(str(temp_unit), 12, -20)
        }
        else{
          textFont(myFont1, 40)
          text(str(int(temp)),-40, -4)
          textFont(myFont1, 20)
          text(str(temp_unit), 19, -18)
        }
      }
      if(cloud >= 50){
        fill("#FBFBFB")
        ellipse(10+ slight_Xm, -150 + slight_Ym, 60)
        ellipse(-20+ slight_Xm, -132 + slight_Ym, 50)
        ellipse(50+ slight_Xm, -130+slight_Ym, 50)
        fill(199, 203, 210)
        ellipse(12+ slight_Xm, -135 + slight_Ym, 50)
        ellipse(-15+ slight_Xm, -125 + slight_Ym, 35)
        ellipse(45+ slight_Xm, -125+slight_Ym, 36)
        fill("#FBFBFB")
        ellipse(10+ slight_Xm, -150 + slight_Ym, 60)
        ellipse(-20+ slight_Xm, -130 + slight_Ym, 30)
        ellipse(50+ slight_Xm, -130+slight_Ym, 36)  
      }
    }
    pop()
  }
}

function preload(){
  myFont1 = loadFont('powerPixel.ttf')
  myFont2 = loadFont('SanstainaRegular.ttf')
}

function setup() {
  createCanvas(800, 600)
  frameRate(60)
  apiRequest()
}

var face_clr = [100, 100, 100]
var gill_type = 100
var gill_clr1 = [150, 150, 150]
var gill_clr2 = [150, 200, 200]
var eyes_type = 100
var eyes_clr = [50, 50, 50]
var mouth_type = 100
var mouth_clr = [150, 150, 150]
var weather = false

function draw() {
  // Build the background using a halo effect and the face color
  background(160)
  blendMode(MULTIPLY) // MULTIPLY - multiply the colors, result will always be darker
  var bg_clr1 = color(face_clr[0], face_clr[1], face_clr[2])
  noStroke()
  for(var i = 0; i < width*2; i+= 56){
    bg_clr1.setAlpha(26)
    fill(bg_clr1)
    ellipse(width/2,height/2, i+mouseX)
    // rect(0,0, i+mouseX, i+mouseX)
    // push()
    // translate(width/2, height/2)
    // rotate(PI)
    // rect(-width/2,-height/2, i+mouseX, i+mouseX)
    // pop()
  }
  
  
  blendMode(BLEND) // BLEND - linear interpolation of colours: C = A*factor + B. This is the default blending mode
  var a = new axolotl(width/2, height/2)
  // Click to switch to another axolotl
  // Change the values of key parameters using "random," and perform the switching through function calls within the axolotl class
  if (mouseIsPressed == true){
    face_clr[0] = random(110, 210)
    face_clr[1] = random(110, 210)
    face_clr[2] = random(110, 210)
    gill_clr1[0] = random(110, 210)
    gill_clr1[1] = random(110, 210)
    gill_clr1[2] = random(110, 210)
    gill_clr2[0] = random(110, 210)
    gill_clr2[1] = random(110, 210)
    gill_clr2[2] = random(110, 210)
    gill_type= int(random()*100)
    eyes_type= int(random()*100)
    eyes_clr[0] = random(60, 200)
    eyes_clr[1] = random(60, 200)
    eyes_clr[2] = random(60, 200)
    mouth_type= int(random()*100)
    mouth_clr[0] = random(110, 210)
    mouth_clr[1] = random(110, 210)
    mouth_clr[2] = random(110, 210)
  }
  noStroke()
  // Call functions to draw the axolotl
  a.gill(gill_type, gill_clr1, gill_clr2, face_clr)
  a.face(face_clr)
  a.mouth(mouth_type, mouth_clr, face_clr)
  a.eyes(eyes_type, eyes_clr, face_clr)
  a.showWeather(weather, eyes_type)
}

async function apiRequest(){
  let request = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.6501&longitude=-73.9496&current=temperature_2m,is_day,rain,snowfall,cloudcover,windspeed_10m&hourly=temperature_2m,rain")
  
  let data = await request.json()
  
  rain = data.current.rain
  temp = data.current.temperature_2m
  isDay = data.current.is_day
  snowfall = data.current.snowfall
  wind = data.current.windspeed_10m
  cloud = data.current.cloudcover
  temp_unit = data.current_units.temperature_2m
}

function keyPressed() {
  if (weather) {
    weather = false
  } 
  else{
    weather = true
  }
}