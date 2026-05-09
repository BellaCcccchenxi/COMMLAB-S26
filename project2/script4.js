let typeSound=document.querySelector("#typeSound");
let typeBackground=document.querySelector("#typeBackground");

function playSound(){
    typeSound.loop=true;
    typeSound.play();
    typeBackground.loop=true;
    typeBackground.play();
}

function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}

let allSpans = document.querySelectorAll(".letterSpan");
let allSpans2 = document.querySelectorAll(".letterSpan2");
let letterPaper=document.querySelector("#letterPaper");
let envelope=document.querySelector("#envelope");


allSpans.forEach(function(span){
    span.randomX = Math.random()*1000 - 600;
    span.randomY = Math.random()*1000 - 600;
})

allSpans2.forEach(function(span){
    span.randomX = Math.random()*2000 - 1000;
    span.randomY = Math.random()*2000 - 1000;
})

let btn1=document.createElement("button");
let btn2=document.querySelector("button");


function positionLetterTexts(){
    // letter1
    let percentage = getScrollPercentage();
    allSpans.forEach(function(span){
        let x=span.randomX;
        let y=span.randomY;
        span.style.transform = "translate("+x*percentage+"px,"+y*percentage+"px)";
        span.style.color="rgba(0,0,0,"+(1-percentage)+")";

    });
    // letter2
    allSpans2.forEach(function(span){
        let x=span.randomX;
        let y=span.randomY;
        span.style.transform = "translate("+x*(1-percentage)+"px,"+y*(1-percentage)+"px)";
        span.style.color="rgba(0,0,0,"+percentage+")";
    });
    // if(percentage>0.95){
    //     document.querySelector("#letterPaper").classList.add("inviteInteraction");
    // }

    if(percentage>0.99){
        btn1.innerText="I can not let her know"
        btn1.classList.add("btn1");
        letterText.append(btn1);

    }
}

// position texts one time at the very start of the page
// to make sure all letters (the second one!!) are in place
positionLetterTexts();


window.addEventListener("scroll", function(){
    
    // position letters every time the scrolling changes
    positionLetterTexts();
    playSound();
})


let typeWrapper=document.querySelector("#typeWrapper");
let text4=document.querySelector("#text4");
let letterText=document.querySelector("#letterText");
let text2=document.createElement("p");


btn1.addEventListener("click",function(){
    paperBall.classList.remove("displayNone");
    paperBall.classList.add("throw");
    text4.classList.add("fadeAway");
    btn1.classList.add("fadeAway");
    btn1.classList.remove("inviteInteraction");
    let btn2=document.createElement("button");
    btn2.innerText="The previous letter is better";
    btn2.classList.add("btn2");
    letterText.append(btn2);
    btn2.addEventListener("click",function(){
        allSpans.forEach(function(span){
     
        span.style.transition="transform 1s ease-out";
        span.style.transform = "translate(0,0)";
        span.style.color="black";
        });
        letterText.addEventListener("click",function(){
        letterPaper.classList.add("fadeAway2");
        letterText.classList.add("fadeAway2");
        envelope.classList.remove("displayNone");
        envelope.classList.add("envelopeAppear");
        let lines=document.createElement("a");
        lines.href="page5.html";
        typeWrapper.append(lines);
        lines.innerText="Briony is outside..."
        lines.classList.add("lines");
        })

    })



})








