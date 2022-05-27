nosex=0;
nosey=0;

function preload(){
    moustache=loadImage('https://i.postimg.cc/RFzHY6SB/103-1035247-mustache-png-mooch-wale-transparent-png-removebg-preview.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is inisialize');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, nosex, nosey, 50, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-25;
        nosey=results[0].pose.nose.y+5;
        console.log("nosex="+nosex);
        console.log("nosey="+nosey); 
    }
}