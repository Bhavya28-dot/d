img="";
status="";
objects=[];


function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(380,380);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);}

function draw(){
    image(video,0,0,380,380);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        r=random(255);
g=random(255);
b=random(255);
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Status- Detected Objects";
    document.getElementById("number_of_objects").innerHTML="Number of objects detected are: " +objects.length;
    fill(r,g,b);
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y, objects[i].height, objects[i].width);
}
    }
    /*fill("red");
    text("Dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);

    fill("red");
    text("Cat",320,120);
    noFill();
stroke("red");
rect(300,90,270,320);*/
}

function modelLoaded(){
    console.log("Model is Loaded!");
    status=true;
    
}
function gotResult(error,result){
    if(error){
        console.log(error);
    } console.log(result);
    objects=result;
}