// ran once
// function setup() {
//   createCanvas(400, 400);
//   background(180,100,120);
//   frameRate(60);
//   r = createSlider(0,255,100);
//   r.position(20,15);
//   r.style("width","80px");
//   g = createSlider(0,255,100);
//   g.position(150,15);
//   g.style("width","80px");
//   b = createSlider(0,255,100);
//   b.position(280,15);
//   b.style("width","80px");
//   s = createSlider(0,100,50);
//   s.position(150,35);
//   s.style("width","80px");
// }

// //loop
// function draw() {
//   colorKey();
// }

// function mouseDragged(){
//   noStroke();
//   fill(color(r.value(),g.value(),b.value()));
//   circle(mouseX,mouseY,s.value());
// }

// function colorKey(){
//   fill(50);
//   square(0,-348,400);
//   fill(255);
//   text(r.value(),110,30);
//   text(g.value(),240,30);
//   text(b.value(),370,30);
// }


let display = false;
function setup() {
  createCanvas(400,400,WEBGL);
}

function draw() {
  background(200);
  orbitControl(1,1,1);
  //box();
  house3d();
}

function house3d(){
  // The push() function saves the current drawing style settings and transformations, while pop() restores these settings. Note that these functions are always used together. They allow you to change the style and transformation settings and later return to what you had. When a new state is started with push(), it builds on the current style and transform information. 
  noFill();
  push();
    //approach1
  // x1 Number: the x-coordinate of the first point
//   // y1 Number: the y-coordinate of the first point
//   // x2 Number: the x-coordinate of the second point
//   // y2 Number: the y-coordinate of the second point
//   // z1 Number: the z-coordinate of the first point
//   // z2 Number: the z-coordinate of the second point
//   // line(x1,y1,x2,y2,z1,z2)
    line(-40,40,40,0,0,0);
    line(40,40,40,0,0,0);
    line(-40,40,-40,0,0,0);
    line(40,40,-40,0,0,0);
    push();
    //house  base
    //translate(x, y, [z])
    translate(0,80);
    box(80,80,80,4,4);
  
    //ground
    translate(0,45);
    box(120,10,120,4,4);
    //door
    translate(0,-30,40);
    box(20,45,4,4);
    //window right
    translate(24,-5);
    box(20,20,4,4);
    translate(-48,0);
    box(20,20,4,4);
  pop();
  
  if(display == true){
    noFill();
    translate(-14,95,50);
    rotateY(1);
    box(20,45,0,4,4);  
  } else {
    noFill();
    translate(0,95,40);
    box(20,45,0,4,4);
  }
  if(key == "o"||key =="O"){
    display = true;
  } else if (key == "p" || key == "P"){
    display = false;
  }
  
  
}
