let soundSpeed=1;
let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = document.querySelector("#catSound");
let fastButton = document.querySelector("#fastButton");
let slowButton = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speed");


fastButton.addEventListener("click",function(){

    soundSpeed=soundSpeed*1.1;
    speedDisplay.innerText=soundSpeed;
    catSound.playbackRate=soundSpeed;
})

slowButton.addEventListener("click",function(){
    soundSpeed=soundSpeed*0.9;
    speedDisplay.innerText=soundSpeed;
    catSound.playbackRate=soundSpeed;

})


function playSound(){
    console.log("play");
    catSound.loop=true;
    catSound.play();
}
playBtn.addEventListener("click",playSound)


function pauseSound(){
    console.log("play");
    pauseSound.play();
}
pauseBtn.addEventListener("click",pauseSound)


