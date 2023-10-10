// Wall Drawing, Sol Lewitt
// code by Seungbum Kim

let n = 10;
let randomPoints;

function setup() {
  createCanvas(800, 500);
  noLoop();
  
  // clean
  background(240);
  randomPoints = [];
  
  
  // step 1
  for (let i=0; i<n; i++) {
    let point = {x: random(width), y: random(height)};
    randomPoints.push(point);
  }
  
  
  // step 2
  strokeWeight(10);
  for (p of randomPoints) {
    point(p.x, p.y);
  }
  
  
  // step 3
  strokeWeight(0.1);
  for (let i=0; i<n; i++) {
    let sp = randomPoints[i];
    for (let j=i+3; j<n; j++) {
      let ep = randomPoints[j];
      line(sp.x, sp.y, ep.x, ep.y);
    }
  }
  
}


function draw() {

}
