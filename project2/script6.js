let music=document.querySelector("#music");

function playSound(){
    music.loop=true;
    music.play();
}


function getScrollPercentage(){
    let scrollAlready=window.scrollY;
    let pageHeight=document.body.scrollHeight;
    let windowHeight=window.innerHeight;
    let possibleScrollSpace=pageHeight-windowHeight;
    let percentage=(scrollAlready/possibleScrollSpace);
    console.log("percentage",percentage);
    return percentage;
}
window.addEventListener("scroll", function(){
    playSound();
    let percentage=getScrollPercentage();
    let windowWidth=window.innerWidth;
    let brionyRun_x_max=windowWidth-100;
    let brionyRun_x=brionyRun_x_max *(percentage);
    let brionyRun=document.querySelector("#brionyRun");
    brionyRun.style.transform="translate("+brionyRun_x+"px,50px)";
})

let paperBall=document.querySelector("#paperBall");
let letterPaper=document.querySelector("#letterPaper")
let btn1=document.querySelector("#btn1");
let wrong=document.querySelector("#wrong");

btn1.addEventListener("click",function(){
    paperBall.classList.add("fadeAway");
    btn1.classList.add("fadeAway");
    letterPaper.classList.add("appear");
    wrong.classList.add("appear");
})


