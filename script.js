class axolotl{
  constructor(x, y, eyes_type, gill_type, mouth_type){
    this.x = x
    this.y = y
    this.eyes_type = eyes_type
    this.gill_type = gill_type
    this.mouth_type = mouth_type
    this.r = int(random(0, 200))
  }

  // function used to construct the face, primarily by changing colors to create differences.
  // parameter is an array containing RGB information
  face(_clr){
    noStroke()
    fill(_clr[0], _clr[1], _clr[2])
    rect(this.x-100, this.y-100, 200, 200, 78, 78, 50, 50)
  }
  
  // function used to construct the gill section, primarily by changing shapes and colors to create differences
  gill(_clr1, _clr2, face_clr){
    noStroke()
    fill(_clr1[0],_clr1[1],_clr1[2])
    var hue = chroma.hsl(frameCount % 360, 1, 0.8)
    var toEyeDist = min(dist(mouseX, mouseY, this.x, this.y), sqrt(width*width+height*height)/2)
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    if (this.gill_type%10 == 0){
      // 1st type of gill
      // >(0_0)<
      push()
      translate(this.x,this.y)
      beginShape()
      vertex(-80, 0)
      vertex(-120 + slight_Xm, -40 + 1.6*slight_Ym)
      vertex(-140 + slight_Xm, -20 + slight_Ym)
      vertex(-120, slight_Ym)
      vertex(-140 + slight_Xm, 20 + slight_Ym)
      vertex(-120 + slight_Xm, 40 + 1.6*slight_Ym)
      endShape()
      beginShape()
      vertex(80, 0)
      vertex(120 + slight_Xm, -40 + 1.6*slight_Ym)
      vertex(140 + slight_Xm, -20 + slight_Ym)
      vertex(120, slight_Ym)
      vertex(140 + slight_Xm, 20 + slight_Ym)
      vertex(120 + slight_Xm, 40 + 1.6*slight_Ym)
      endShape()
      pop()
    }
    else if(this.gill_type%10 == 1){
      // 2nd type of gill
      // ≡(0_0)≡
      push()
      translate(this.x,this.y)
      quad(-168 + slight_Xm, -30, 168 - slight_Xm, -30, 152 - slight_Xm, -10, -152 + slight_Xm, -10)
      quad(-150 - slight_Xm, 28, 150 + slight_Xm, 28, 166 + slight_Xm, 10, -166 - slight_Xm, 10)
      fill(_clr2[0],_clr2[1],_clr2[2])
      quad(-140 - slight_Xm, -9, +140 + slight_Xm, -9, 124 + slight_Xm, 9, -124 - slight_Xm, 9)
      pop()
    }
    else if(this.gill_type%10 == 2){
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
    else if(this.gill_type%10 == 3){
      // 4th type of gill
      // ◖(0_0)◗
      push()
      translate(this.x,this.y)
      ellipse(80, slight_Ym, 120+2*slight_Xm)
      ellipse(-80, slight_Ym, 120+2*slight_Xm)
      stroke(face_clr[0],face_clr[1],face_clr[2])
      strokeWeight(5)
      push()
      rotate(PI/20)
      line(115, slight_Ym, -116, slight_Ym)
      rotate(-2*PI/20)
      line(115, slight_Ym, -116, slight_Ym)
      pop()
      line(119, slight_Ym, -119, slight_Ym)
      pop()
    }
    else if(this.gill_type%10 == 4){
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
    else if(this.gill_type%10 == 5){
      // 6th type of gill
      // ►(0_0)◄
      push()
      translate(this.x, this.y)
      fill(hue.rgb())
      triangle(0, 0, -200 + slight_Xm, -30+ slight_Ym, -200+ slight_Xm, -70)
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(0, 0, -200 + slight_Xm, -20+ slight_Ym, -190+ slight_Xm, 20+ slight_Ym)
      hue = chroma.hsl(20+frameCount % 360, 1, 0.8)
      fill(hue.rgb())
      triangle(0, 0, -190 + slight_Xm, 30+ slight_Ym, -170+ slight_Xm, 70)

      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(0, 0, 200 + slight_Xm, -30+ slight_Ym, 200+ slight_Xm, -70)
      hue = chroma.hsl(40+frameCount % 360, 1, 0.8)
      fill(hue.rgb())
      triangle(0, 0, 200 + slight_Xm, -20+ slight_Ym, 190+ slight_Xm, 20+ slight_Ym)
      fill(_clr1[0],_clr1[1],_clr1[2])
      triangle(0, 0, 190 + slight_Xm, 30+ slight_Ym, 170+ slight_Xm, 70)
      pop()
    }
    else if(this.gill_type%10 == 6){
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
    else if(this.gill_type%10 == 7){
      // 8th type of gill
      // ⋱(0_0)⋰
      fill(hue.rgb())
      // fill(_clr1[0],_clr1[1],_clr1[2])
      push()
      translate(this.x, this.y)
      rect(80+frameCount%15, 20+ slight_Ym, 50, 25)
      rect(125+(10+frameCount)%15, -5+ slight_Ym, 25)
      rect(150+(20+frameCount)%15, -20+ slight_Ym, 15)
      rect(-130-frameCount%15, 20+ slight_Ym, 50, 25)
      rect(-150-(10+frameCount)%15, -5+ slight_Ym, 25)
      rect(-165-(20+frameCount)%15, -20+ slight_Ym, 15)
      hue = chroma.hsl(frameCount % 360, 1, 0.5)
      fill(hue.rgb())
      //fill(_clr1[0] + 15,_clr1[1] + 15,_clr1[2] + 15)
      rect(65+frameCount%15, -15+ slight_Ym, 50, 25)
      rect(110+(10+frameCount)%15, -40+ slight_Ym, 25)
      rect(130+(20+frameCount)%15, -60+ slight_Ym, 20)
      rect(-115-frameCount%15, -15+ slight_Ym, 50, 25)
      rect(-135-(10+frameCount)%15, -40+ slight_Ym, 25)
      rect(-150-(20+frameCount)%15, -60+ slight_Ym, 20)
      hue = chroma.hsl(10+frameCount % 360, 1, 0.5)
      fill(hue.rgb())
      // fill(_clr1[0] + 35,_clr1[1] + 35,_clr1[2] + 35)
      rect(50+frameCount%15, -55+ slight_Ym, 50, 20)
      rect(95+(10+frameCount)%15, -70+ slight_Ym, 15)
      rect(-100-frameCount%15, -55+ slight_Ym, 50, 20)
      rect(-110-(10+frameCount)%15, -70+ slight_Ym, 15)
      pop()
    }
    else if(this.gill_type%10 == 8){
      // 9th type of gill
      // ∻(0_0)∻
      push()
      translate(this.x, this.y)
      for(var i = 1; i < 15; i++){
        fill(face_clr[0]+20,face_clr[1]+20,face_clr[2]+20)
        ellipse(-200+15*i, slight_Ym+sin(i*cos(frameCount/15)) * 8, 20+i/2)
        ellipse(200-15*i, slight_Ym+sin(i*cos(frameCount/15)) * 8, 20+i/2)

        fill(face_clr[0]-30,face_clr[1]-30,face_clr[2]-30)
        ellipse(-180+15*i, 40 + slight_Ym-sin(i*cos(frameCount/15)) * 8, 20-i/2)
        ellipse(180-15*i, 40 +slight_Ym+sin(i*cos(frameCount/15)) * 8, 20-i/2)
        ellipse(-180+15*i, -40 + slight_Ym-sin(i*cos(frameCount/15)) * 8, 20-i/2)
        ellipse(180-15*i, -40 +slight_Ym+sin(i*cos(frameCount/15)) * 8, 20-i/2)
        
        fill(_clr1[0],_clr1[1],_clr1[2])
        ellipse(-160+15*i, 20 + slight_Ym-sin(i*cos(frameCount/15)) * 8, 20-i/2)
        ellipse(160-15*i, 20 +slight_Ym+sin(i*cos(frameCount/15)) * 8, 20-i/2)
        ellipse(-160+15*i, -20 + slight_Ym-sin(i*cos(frameCount/15)) * 8, 20-i/2)
        ellipse(160-15*i, -20 +slight_Ym+sin(i*cos(frameCount/15)) * 8, 20-i/2)
        // Bubbles
        randBubble(-200+15*i, slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(200-15*i, slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(-180+15*i, 40 + slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(180-15*i, 40 +slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(-160+15*i, 20 + slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(160-15*i, 20 +slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(-180+15*i, -40 + slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(180-15*i, -40 +slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(-160+15*i, -20 + slight_Ym+sin(i*cos(frameCount/15)) * 8)
        randBubble(160-15*i, -20 +slight_Ym+sin(i*cos(frameCount/15)) * 8)
    
      }
      pop()
    }
    else if(this.gill_type%10 == 9){
      // 10th type of gill
      // ⦩(0_0)⦨
      push()
      translate(this.x, this.y)
      for(var i=0; i <25; i++){
        fill(face_clr[0],face_clr[1],face_clr[2])
        push()
        translate(-90, -15)
        rotate(i*PI/100)
        ellipse(-20, 0, 50 + random(0, 50)+toEyeDist/10, 30)
        pop()  
        push()
        translate(90, -15)
        rotate(-i*PI/100)
        ellipse(20, 0, 50 + random(0, 40)+toEyeDist/10, 30)
        pop()
        
        fill(255-face_clr[0]+50,255-face_clr[1]+50,255-face_clr[2]+50)
        push()
        translate(-90, 20)
        rotate(-i*PI/100)
        ellipse(-20, 0, 50 + random(0, 40), 20)
        pop()  
        push()
        translate(90, 20)
        rotate(i*PI/100)
        ellipse(20, 0, 50 + random(0, 40), 20)
        pop()
      }
      for(var i=0; i <25; i++){
        fill(_clr1[0],_clr1[1],_clr1[2])
        push()
        translate(-90, 0)
        rotate(i*PI/100)
        ellipse(-20, 0, 90 + random(0, 40)+toEyeDist/15, 30)
        pop()  
        push()
        translate(90+slight_Xm, 0)
        rotate(i*PI/100)
        ellipse(20, 0, 90+ random(0, 40), 30)
        pop()
        
        push()
        translate(-90+slight_Xm, 0)
        rotate(-i*PI/100)
        ellipse(-20, 0, 90 + random(0, 40), 30)
        pop()  
        push()
        translate(90, 0)
        rotate(-i*PI/100)
        ellipse(20, 0, 90 + random(0, 40)+toEyeDist/15, 30)
        pop()
      }
      pop()
    }
  }
  
  eyes(_clr, face_clr, deco_type){
    noStroke()
    var hue = chroma.hsl(frameCount % 360, 1, 0.8)
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    var toEyeDist = min(dist(mouseX, mouseY, this.x, this.y), sqrt(1000*1000+800*800)/2)
    // *Use this variable to calculate the highlight size in the eyes
    var highlight = min(dist(mouseX, mouseY, width, 0), dist(mouseX, mouseY, 0, height), dist(mouseX, mouseY, 0, 0), dist(mouseX, mouseY, height, width), sqrt(800*800+600*600)/2)
    
    if(this.eyes_type%10 == 0){
      // 1st type of eyes
      // Peaceful eyes
      // (⊝⊝)
      push()
      translate(this.x, this.y)
      fill("white")
      circle(-30, -20, 60)
      circle(30, -20, 60)
      fill(_clr[0], _clr[1], _clr[2])
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        // Blink
        rect(-46+slight_Xm, -15+slight_Ym, 35, (frameCount+this.r)% 200 - toEyeDist/50)
        rect(10+slight_Xm, -15+slight_Ym, 35, (frameCount+this.r)% 200 - toEyeDist/50)
      }
      else{
        rect(-46+slight_Xm, -26+slight_Ym, 35, 23 - toEyeDist/50)
        rect(10+slight_Xm, -26+slight_Ym, 35, 23 - toEyeDist/50)
      }

      pop()
    }
    else if(this.eyes_type%10 == 1){
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

      // Blink
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 8){
        fill(face_clr[0],face_clr[1],face_clr[2])
        rect(-60, -50, 60, 64-(frameCount+this.r)% 200*2)
        rect(0, -50, 60, 64-(frameCount+this.r)% 200*2)
      }

      pop()
    }
    else if(this.eyes_type%10 == 2){
      // 3rd type of eyes
      // Big eyes
      // (⋒ ⋒)
      push()
      translate(this.x, this.y)
      fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
      rect(-74+slight_Xm, -76+slight_Ym, 66, 95-toEyeDist/50, 100, 15, 10, 10)
      rect(8+slight_Xm, -76+slight_Ym, 66, 95-toEyeDist/50, 15, 100, 10, 10)
      fill("white")
      rect(-65+slight_Xm, -70+slight_Ym, 56, 90-toEyeDist/50, 100, 15, 10, 10)
      rect(9+slight_Xm, -70+slight_Ym, 56, 90-toEyeDist/50, 15, 100, 10, 10)
      fill(_clr[0], _clr[1], _clr[2])
      rect(-45+slight_Xm*2, -50+slight_Ym*2, 25, 60-toEyeDist/30, 10, 10, 10, 10)
      rect(25+slight_Xm*2, -50+slight_Ym*2, 25, 60-toEyeDist/30, 10, 10, 10, 10)
      fill("white")
      ellipse(-35+slight_Xm, -35+slight_Ym, 10)
      ellipse(35+slight_Xm, -35+slight_Ym, 10)

      // Blink
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 8){
        fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
        rect(-74+slight_Xm, -76+slight_Ym, 66, 97-toEyeDist/50-(frameCount+this.r)% 200, 100, 15, 10, 10)
        rect(8+slight_Xm, -76+slight_Ym, 66, 97-toEyeDist/50-(frameCount+this.r)% 200, 15, 100, 10, 10)
      }

      pop()
    }
    else if(this.eyes_type%10 == 3){
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
      
      //Blink
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        ellipse(-35, -40, 85, 60-(frameCount+this.r)% 200)
        ellipse(35, -40, 85, 60-(frameCount+this.r)% 200)
      }

      pop()
    }
    else if(this.eyes_type%10 == 4){
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

      // Blink
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        ellipse(0, -38, 105, 110-(frameCount+this.r)% 200 *1.5)
      }

      pop()
    }
    else if(this.eyes_type%10 == 5){
      // 6th type of eyes
      // Eyes behind glasses
      // (〄〄)
      push()
      translate(this.x, this.y)
      fill(_clr[0]/2, _clr[1]/2, _clr[2]/2)
      ellipse(-35, -40, 85, 60)
      ellipse(35, -40, 85, 60)
      fill(_clr[0]+toEyeDist/10, _clr[1]+toEyeDist/10, _clr[2]+toEyeDist/10)
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        // Blink
        rect(-50+slight_Xm*2, -45+slight_Ym, 18, (frameCount+this.r)% 200, 5)
        rect(20+slight_Xm*2, -45+slight_Ym, 18, (frameCount+this.r)% 200, 5)
      }
      else{
        rect(-50+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
        rect(20+slight_Xm*2, -65+slight_Ym, 18, 40, 5)
      }
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
    else if(this.eyes_type%10 == 6){
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
        if(deco_type%6 == 5 && deco){
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
      else if(dist(mouseX, mouseY, this.x, this.y-150) < 60 && deco_type%6 == 5){
        // Important!!! Avoid conflicts
      }
      else{
        // Eyebrows
        rect(-60+slight_Xm, -45+slight_Ym, 10, 10)
        rect(-50+slight_Xm, -50+slight_Ym, 20, 10)
        rect(30+slight_Xm, -50+slight_Ym, 20, 10)
        rect(50+slight_Xm, -45+slight_Ym, 10, 10)
        // Eyes
        fill(_clr)
        if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 8){
          // Blink
          rect(-40+slight_Xm, -15+slight_Ym, 10, (frameCount+this.r)% 200-toEyeDist/50)
          rect(30+slight_Xm, -15+slight_Ym, 10, (frameCount+this.r)% 200-toEyeDist/50)
        }
        else{
          rect(-40+slight_Xm, -25+slight_Ym, 10, 30-toEyeDist/50)
          rect(30+slight_Xm, -25+slight_Ym, 10, 30-toEyeDist/50)
        }
      }
      fill(face_clr[0]-20,face_clr[1]-20,face_clr[2]-20)
      ellipse(-73, -20, 40, 75)
      ellipse(73, -20, 40, 75)
      fill(face_clr[0],face_clr[1],face_clr[2])
      ellipse(-76, -20, 38, 80)
      ellipse(76, -20, 38, 80)
      pop()
    }
    else if(this.eyes_type%10 == 7){
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

      // Blink
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        fill(face_clr[0], face_clr[1], face_clr[2])
        ellipse(-40, -20, 55, 55-(frameCount+this.r)% 200)
        ellipse(40, -20, 55, 55-(frameCount+this.r)% 200)
      }

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

      // Blink
      if(toEyeDist >= 60 && (frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        fill(face_clr[0], face_clr[1], face_clr[2])
        ellipse(0, -50, 55, 50-toEyeDist/80 - (frameCount+this.r)% 200)
      }

      pop()
    }
    else if(this.eyes_type%10 == 8){
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

      // Blink 
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 8){
        fill(face_clr[0], face_clr[1], face_clr[2])
        ellipse(-40+slight_Xm, -30+slight_Ym, 65, 64-(frameCount+this.r)% 200)
        ellipse(40+slight_Xm, -30+slight_Ym, 65, 64-(frameCount+this.r)% 200)
      }

      pop()
    }
    else if(this.eyes_type%10 == 9){
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
      if (this.r % 3 == 0){
        fill(_clr[0], _clr[1], _clr[2])
      }
      rect(10,-40, 70,40, 100, 0, 100, 0)
      fill('white')
      rect(20+slight_Xm/5,-35, 55,30, 100, 0, 100, 0)
      fill(255-_clr[0], 255-_clr[1], 255-_clr[2])
      ellipse(-45+slight_Xm, -20+slight_Ym/2, 24, 23)
      fill(_clr[0], _clr[1], _clr[2])
      if (this.r % 3 == 0){
        fill(255-_clr[0], 255-_clr[1], 255-_clr[2])
      }
      ellipse(45+slight_Xm, -20+slight_Ym/2, 24, 23)
      fill('white')
      ellipse(-45+slight_Xm/2, -22+slight_Ym, 5)
      ellipse(45+slight_Xm/2, -22+slight_Ym, 5)

      // Blink
      if((frameCount+this.r)% 200 >= 0 && (frameCount+this.r)% 200 <= 6){
        fill(_clr[0], _clr[1], _clr[2])
        rect(-75,-35, 55,28-(frameCount+this.r)% 200, 0, 100, 0, 100)
        fill(255-_clr[0], 255-_clr[1], 255-_clr[2])
        if (this.r % 3 == 0){
          fill(_clr[0], _clr[1], _clr[2])
        }
        rect(20,-35, 55, 28-(frameCount+this.r)% 200, 100, 0, 100, 0)
      }
      pop()
    }
  }
  
   mouth(_clr, face_clr){
    noStroke()
    fill(_clr[0], _clr[1], _clr[2])
    var hue = chroma.hsl(frameCount % 360, 1, 0.8)
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)
    var toEyeDist = min(dist(mouseX, mouseY, this.x, this.y),sqrt(1000*1000+800*800)/2)

    if(this.mouth_type%10 == 0){
      // 1st type of gill
      // Reptile mouth
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
    else if(this.mouth_type%10 == 1){
      // 2nd type of gill
      // Thick lips
      push()
      translate(this.x, this.y)
      ellipse(30, 50+slight_Ym, 86, 50+slight_Ym)
      ellipse(-30, 50+slight_Ym, 86, 50+slight_Ym)
      fill(face_clr[0],face_clr[1],face_clr[2])
      rect(-80, 55+slight_Ym, 160, 30)
      pop()
    }
    else if(this.mouth_type%10 == 2){
      // 3rd type of gill
      // Expressionless mouth
      push()
      translate(this.x, this.y)
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(-10, 46+slight_Ym, -6+toEyeDist/300, 50+slight_Ym)
      line(10, 46+slight_Ym, 6-toEyeDist/300 , 50+slight_Ym)
      stroke(255-_clr[0], 255-_clr[1], 255-_clr[2])
      strokeWeight(8)
      line(-55-toEyeDist/50, 65+slight_Ym/2, 55+toEyeDist/50, 65-slight_Ym/2)
      pop()
    }
    else if(this.mouth_type%10 == 3){
      // 4th type of gill
      // Smile mouth
      noFill();
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(this.x-9, this.y+40+slight_Ym, this.x-7+toEyeDist/300, this.y+42+slight_Ym)
      line(this.x+9, this.y+40+slight_Ym, this.x+7-toEyeDist/300 , this.y+42+slight_Ym)
      stroke(_clr[0], _clr[1], _clr[2]);
      strokeWeight(8)
      arc(this.x, this.y+20, 130+slight_Xm, 110+slight_Ym, radians(25), radians(140), OPEN)
    }
    else if(this.mouth_type%10 == 4){
      // 5th type of gill
      // Bird beak
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
    else if(this.mouth_type%10 == 5){
      // 6th type of gill
      // Rabbit mouth
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
    else if(this.mouth_type%10 == 6){
      // 7th type of gill
      // Bucktoothed mouth
      push()
      translate(this.x, this.y)
      rect(-72+slight_Xm, 30+slight_Ym, 144, 46-toEyeDist/20, 50, 50, 50, 50)
      fill(_clr[0]+50, _clr[1], _clr[2])
      rect(-60+slight_Xm, 35+slight_Ym, 120, 35-toEyeDist/20, 10, 10, 50, 50)
      fill('white')
      rect(-30+slight_Xm, 35+slight_Ym, 60, 20-toEyeDist/180, 0, 0, 6, 6)
      fill('#D1D1D1')
      rect(-2+slight_Xm, 35+slight_Ym, 4, 20-toEyeDist/180)
      pop()
    }
    else if(this.mouth_type%10 == 7){
      // 8th type of gill
      // Grinning mouth
      push()
      translate(this.x, this.y)
      fill('#D1D1D1')
      rect(-60, 35+slight_Ym, 120, 35-toEyeDist/20, 10, 10, 10, 10)
      fill('white')
      rect(-60, 38+slight_Ym, 120, 32-toEyeDist/20, 10, 10, 10, 10)
      fill('#D1D1D1')
      rect(-32+slight_Xm/2, 35+slight_Ym, 4, 35-toEyeDist/20)
      rect(-2+slight_Xm/2, 35+slight_Ym, 4, 35-toEyeDist/20)
      rect(28+slight_Xm/2, 35+slight_Ym, 4, 35-toEyeDist/20)
      noFill();
      stroke(_clr[0], _clr[1], _clr[2])
      strokeWeight(4)
      line(-9, 26+slight_Ym, -7+toEyeDist/300, 28+slight_Ym)
      line(9, 26+slight_Ym, 7-toEyeDist/300 , 28+slight_Ym)
      pop()
    }
    else if(this.mouth_type%10 == 8){
      // 9th type of gill
      // Heart mouth
      push()
      translate(this.x, this.y)
      translate(0, 46)
      push()
      rotate(PI/6)
      fill(_clr[0], _clr[1], _clr[2])
      ellipse(11, slight_Ym, 40, 62)
      rotate(-PI/3)
      ellipse(-11, slight_Ym, 40, 62)
      pop()
      fill(face_clr[0]+10,face_clr[1]-10,face_clr[2]-10)
      ellipse(slight_Xm/2, 6+slight_Ym, 24+toEyeDist/50, 28-toEyeDist/50)
      pop()
    }
    else if(this.mouth_type%10 == 9){
      // 10th type of gill
      // X mouth
      push()
      translate(this.x, this.y)
      push()
      translate(0, 40)
      rotate(PI/4)
      fill(hue.rgb())
      rect(0, -20, 10, 50)
      rotate(PI/2)
      rect(0, -30, 10, 50)
      pop()
      pop()
    }
  }

  deco(deco_type, face_clr, _clr){
    noStroke()
    fill(_clr[0]+20, _clr[1]+20, _clr[2]+20)
    var hue = chroma.hsl(frameCount % 360, 1, 0.8)
    var slight_Xm = map(mouseX - this.x, -width/2, width/2, -5, 5, true)
    var slight_Ym = map(mouseY - this.y, -height/2, height/2, -5, 5, true)

    if (deco){
      if(deco_type%6 == 0){
        // Chick/Bird
        push()
        translate(this.x, this.y)
        fill(face_clr[0]-20, face_clr[1]-20, face_clr[2]-20)
        rect(-18+slight_Xm/2, -115, 4, 30)
        rect(14+slight_Xm/2, -115, 4, 30)
        rect(-22, -88, 10, 4, 20)
        rect(11, -88, 10, 4, 20)
          
        fill(_clr[0]+10, _clr[1]+10, _clr[2])
        ellipse(slight_Xm, -115-slight_Ym/2, 60, 50)
        fill(face_clr[0]+20, face_clr[1]+20, face_clr[2])
        ellipse(slight_Xm, -140-slight_Ym, 45, 50)
        fill(_clr[0]+10, _clr[1]+10, _clr[2])
        ellipse(slight_Xm, -145-slight_Ym, 50, 45)
          
        fill('black')
        ellipse(-8+slight_Xm*1.5, -150-slight_Ym/2, 3, 8)
        ellipse(8+slight_Xm*1.5, -150-slight_Ym/2, 3, 8)
        fill('white')
        ellipse(-8+slight_Xm*1.5, -154-slight_Ym/2, 3, 4)
        ellipse(8+slight_Xm*1.5, -154-slight_Ym/2, 3, 4)
          
        fill('#6A748E')
        triangle(slight_Xm, -145-slight_Ym/2, -4+slight_Xm, -140-slight_Ym/2, 4+slight_Xm, -140-slight_Ym/2)
        pop()
      }
      else if(deco_type%6 == 1){
        // Hat
        push()
        translate(this.x, this.y)
        ellipse(0, -105, 100, 20)
        fill(_clr[0], _clr[1], _clr[2])
        ellipse(0, -110, 60, 10)
        fill(_clr[0]+20, _clr[1]+20, _clr[2]+20)
        rect(-20, -150, 40, 40, 5)
        fill(_clr[0], _clr[1], _clr[2])
        triangle(-17, -150, -25, -140, -19, -110)
        triangle(17, -150, 25, -140, 19, -110)
        pop()
      }
      else if(deco_type%6 == 2){
        // Pointed Hat
        push()
        translate(this.x, this.y)
        triangle(0, -200, -30, -110, 30, -110)
        for(var i=0; i <200; i++){
          fill('white')
          push()
          translate(-30, -110)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()  
          push()
          translate(-20, -106)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(-10, -104)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(0, -103)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(10, -104)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(20, -106)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(30, -110)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          
          push()
          translate(0, -200)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
        }
        pop()
      }
      else if(deco_type%6 == 3){
        // Crown
        push()
        translate(this.x, this.y)
        fill('#E8C55F')
        rect(-5, -200, 10, 100, 2)
        rect(-12, -190, 24, 8, 2)
        fill(_clr[0]+20, _clr[1]+20, _clr[2]+20)
        ellipse(-25, -140, 40,50)
        ellipse(25, -140, 40,50)
        fill(_clr[0]-10, _clr[1]-10, _clr[2]-10)
        ellipse(0, -140, 50,60)
        fill(_clr[0]+20, _clr[1]+20, _clr[2]+20)
        ellipse(0, -140, 40,60)
          
        for(var i=0; i <200; i++){
          fill('white')
          push()
          translate(-30, -110)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()  
          push()
          translate(-20, -106)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(-10, -104)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(0, -103)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(10, -104)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(20, -106)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
          push()
          translate(30, -110)
          rotate(i*PI/100)
          ellipse(0, 0, 20 + random(0, 5), 1)
          pop()
        }
        fill('#E8C55F')
        ellipse(0, -130, 10, 15)
        fill(hue.rgb())
        ellipse(0, -130, 8, 11)
        pop()
      }
      else if(deco_type%6 == 4){
        // Awkward Sign
        push()
        translate(this.x, this.y)
        fill('white')
        rect(50+ slight_Xm, -110, 3, 50, 2)
        rect(60+ slight_Xm, -110, 3, 50, 2)
        rect(70+ slight_Xm, -110, 3, 60, 2)
        rect(80+ slight_Xm, -110, 3, 70, 2)
        fill('lightblue')
        ellipse(-80+ slight_Xm, -70, 40)
        triangle(-80+ slight_Xm, -110, -100+ slight_Xm, -70, -60+ slight_Xm, -70)
        fill('white')
        ellipse(-75+ slight_Xm, -70, 20, 30)
        fill('lightblue')
        ellipse(-80+ slight_Xm, -70, 18, 30)
        rect(-80+ slight_Xm, -65, 15, 3)
        pop()
      }
      else if(deco_type%6 == 5){
        // Weather System
        push()
        translate(this.x, this.y)
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
        if(dist(mouseX, mouseY, this.x, this.y-150) < 60 && this.eyes_type%10 == 6){
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
        
        pop()
      }
    }
    
  }

  update(new_x, new_y){
    this.x = new_x
    this.y = new_y
  }
}
