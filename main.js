noseX=0;
noseY=0;
function preload() {
Clown_nose=loadImage("https://i.postimg.cc/YqVksmw6/MOUSETACHE-removebg-preview.png")
}
function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw() {
image(video,0,0,400,400);
fill(255,0,0);
stroke(255,0,0);
image(Clown_nose, noseX-35 ,noseY-5,75,50 )
}
function take_snapshot(){
save('Aden_Filter.png');
}
function modelLoaded(){
console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
if(results.length>0)
  {
console.log(results)
noseY=results[0].pose.nose.y;
noseX=results[0].pose.nose.x;
console.log("nose x=" +noseX);
console.log("nose y=" + noseY);
  }
}