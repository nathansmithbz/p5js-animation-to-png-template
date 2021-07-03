// Jeff (twitter @ippsketch)
// template for saving png files from p5.js sketch using CCapture

var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});

const NUM_FRAMES = 190;
const T = 1;

function setup() {
    createCanvas(100, 100, WEBGL);
}

function draw() {
    if (capture && frameCount==1) capturer.start(); // start the animation capture

    //here is the sketch
    var t = ((frameCount-1)%NUM_FRAMES)/NUM_FRAMES
    background(0, 0, 0);
    rotateY(millis() / 1000);
    fill(255);
    stroke(220);
    torus(25, 15, 24, 16);

    if (capture){
        capturer.capture( canvas ); // if capture is 'true', save the frame
        if (frameCount-1 == NUM_FRAMES){ //stop and save after NUM_FRAMES
            capturer.stop(); 
            capturer.save(); 
            noLoop(); 
        }
    }
}

function buttonPress()
{
    if (capture == false) {
        capture = true;
        document.getElementById("myButton").value='Saving Frames... Press Again to Cancel'; 
        frameCount = 0;
    } else {
        location.reload(); //refresh the page (starts animation over, stops saving frames)
    }
}

