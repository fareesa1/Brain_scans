let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/BL3oixz7g/';


let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  img = loadImage('Y2.jpg');
}

function setup() {
  createCanvas(320, 260);
  
  classifier.classify(img, gotResult);
  image(img, 0, 0);
  
}

function draw() {
  background(0);
   image(img, 0, 0);
  

 // label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}


function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  
  label = results[0].label;
console.log(label);
}