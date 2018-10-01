function preload(){

}

function setup() {
// fullsize canvas
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(40);
  frameRate(12);
}

function draw() {
// ellipses
  // 0° ellipse
  stroke('#facfac');
  fill(40);
  ellipse(width/2-400,height/2,mouseX/50,mouseX/50);
  // 60° ellipse
  stroke('#facfac');
  fill(40);
  ellipse(width/2+400*cos(60),height/2+400*sin(60),mouseX/50,mouseX/50);
  // 120° ellipse
  stroke('#facfac');
  fill(40);
  ellipse(width/2+400*cos(120),height/2+400*sin(120),mouseY/25,mouseY/25);
  // 180° ellipse
  stroke('#facfac');
  fill(40);
  ellipse(width/2+400,height/2,mouseY/25,mouseY/25);
  // 240° ellipse
  stroke('#facfac');
  fill(40);
  ellipse(width/2+400*cos(240),height/2+400*sin(240),mouseX/50,mouseX/50);
  // 300° ellipse
  stroke('#facfac');
  fill(40);
  ellipse(width/2+400*cos(300),height/2+400*sin(300),mouseY/25,mouseY/25)

// momentum wheels
  // 0°
  push();
  translate(width/2+100,height/2);
  stroke(lerpColor(color('#282828'),color('#fac912'),frameCount/120))
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();
  // 60°
  push();
  translate(width/2+100*cos(60),height/2+100*sin(60));
  rotate(60);
  stroke(lerpColor(color('#fac912'),color('#282828'),frameCount/120));
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();
  // 120°
  push();
  translate(width/2+100*cos(120),height/2+100*sin(120));
  rotate(120);
  stroke(lerpColor(color('#282828'),color('#fac912'),frameCount/120))
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();
  // 180°
  push();
  translate(width/2-100,height/2);
  stroke(lerpColor(color('#fac912'),color('#282828'),frameCount/120));
  line(-200,0,-1*cos(frameCount*3)*200,-1*sin(frameCount*3)*200);
  pop();
  // 240°
  push();
  translate(width/2+100*cos(240),height/2+100*sin(240));
  rotate(240);
  stroke(lerpColor(color('#282828'),color('#fac912'),frameCount/120))
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();
  // 300°
  push();
  translate(width/2+100*cos(300),height/2+100*sin(300));
  rotate(300);
  stroke(lerpColor(color('#fac912'),color('#282828'),frameCount/120));
  line(200,0,cos(frameCount*3)*200,sin(frameCount*3)*200);
  pop();

  if (frameCount == 120) {
    noLoop();
  }
}
