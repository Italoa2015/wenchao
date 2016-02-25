function setup() {
  createCanvas(1250, 530); // creates a canvas or an screen 
  noFill(); // makes all the shapes to be empty inside (without color)
  //alert(sq(2));
   //createVector(1,2,3);
}
 
// how long should the radius be
 
 
function draw() {
  clear(); // clears the canvas for every frame update 
  background(255); // Set the background color
      
  for (var i = 1; i<width-1; i+=200) {
    for (var j = 200; j<height-200; j+=5) {
      // declaring Angle, Radius & Speed
      var radiusLength = 240;
      var angle = 0;
      var speed = 0.003;
      var radius = Math.sin( frameCount * speed);
      var coLor = map(radius, -1.,1., 50,255); // scaling sine values to color values ( o to 255)
      stroke(146,168,200,220); // sets the color of lines and borders of shapes
      
      // manipulating the phase of the sine, based on the EVEN or ODD numbers (X&Y positions) 
      if ( i % 2 == 0 && j % 2 == 1) 
      {
        radius = Math.sin(angle + QUARTER_PI + frameCount * speed);
      }
      ellipse(i, j, radius * radiusLength, radius * radiusLength); // (xPostion, yPosition, xRadius, yRadius)
 
      angle++; // keep adding the angle, in our case every 360 value, we'll have the same angle series,
 
    }
 
  }
 
 
}
 