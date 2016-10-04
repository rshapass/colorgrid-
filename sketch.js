function setup() {
    createCanvas(501,302);
    cursor(HAND);
    noStroke();
  }

function draw() {
   background(0);
   stroke(255);
   strokeWeight(1);
   noFill();
   
   //ROW 1
   if (mouseX>1 && mouseX<100 && mouseY>1 && mouseY<100){
     fill(255,105,180);
   }else{noFill();}
   rect(1,1,100,100);
    
    if (mouseX>100 && mouseX<200 && mouseY>1 && mouseY<100){
     fill(255,182,193);
    }else{noFill();}
    rect(100,1,100,100);
    
    if (mouseX>200 && mouseX<300 && mouseY>1 && mouseY<100){
     fill(255,20,147);
    }else{noFill();}
    rect(200,1,100,100);
    
     if (mouseX>300 && mouseX<400 && mouseY>1 && mouseY<100){
     fill(219,112,147);
    }else{noFill();}
    rect(300,1,100,100);
    
      if (mouseX>400 && mouseX<500 && mouseY>1 && mouseY<100){
     fill(199,21,133);
    }else{noFill();}
    rect(400,1,100,100);
    
    //ROW 2  
    if (mouseX>1 && mouseX<100 && mouseY>100 && mouseY<200){
     fill(128,0,128);}
     else{noFill();}
    rect(1,100,100,100);
    
    if (mouseX>100 && mouseX<200 && mouseY>100 && mouseY<200){
     fill(147,112,219);}
     else{noFill();}
    rect(100,100,100,100);
    
     if (mouseX>200 && mouseX<300 && mouseY>100 && mouseY<200){
     fill(255,0,255);}
     else{noFill();}
    rect(200,100,100,100);
    
     if (mouseX>300 && mouseX<400 && mouseY>100 && mouseY<200){
     fill(221,160,221);}
     else{noFill();}
    rect(300,100,100,100);
    
    if (mouseX>400 && mouseX<500 && mouseY>100 && mouseY<200){
     fill(230,230,250);}
     else{noFill();}
    rect(400,100,100,100);
    
   
    //ROW3
    if (mouseX>1 && mouseX<100 && mouseY>200 && mouseY<300){
     fill(152,251,152);}
     else{noFill();}
    rect(1,200,100,100);
    
    if (mouseX>100 && mouseX<200 && mouseY>200 && mouseY<300){
     fill(143,188,143);}
     else{noFill();}
    rect(100,200,100,100);
    
    if (mouseX>200 && mouseX<300 && mouseY>200 && mouseY<300){
     fill(60,179,113);}
     else{noFill();}
     rect(200,200,100,100);
     
     if (mouseX>300 && mouseX<400 && mouseY>200 && mouseY<300){
     fill(32,178,170);}
     else{noFill();}
    rect(300,200,100,100);
    
    if (mouseX>400 && mouseX<500 && mouseY>200 && mouseY<300){
     fill(46,139,87);}
     else{noFill();}
    rect(400,200,100,100);
   
  
}