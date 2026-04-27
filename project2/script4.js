

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

allSpans.forEach(function(span){
    span.randomX = Math.random()*1000 - 600;
    span.randomY = Math.random()*1000 - 600;
})

allSpans2.forEach(function(span){
    span.randomX = Math.random()*2000 - 1000;
    span.randomY = Math.random()*2000 - 1000;
})

window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();
    allSpans.forEach(function(span){
        let x=span.randomX;
        let y=span.randomY;
        span.style.transform = "translate("+x*percentage+"px,"+y*percentage+"px)";
        span.style.color="rgba(0,0,0,"+(1-percentage)+")";

    });
    
})

window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();
    allSpans2.forEach(function(span){
        let x=span.randomX;
        let y=span.randomY;
        span.style.transform = "translate("+x*(1-percentage)+"px,"+y*(1-percentage)+"px)";
        span.style.color="rgba(0,0,0,"+percentage+")";
    });
    
})

window.addEventListener("scroll",function(){
    let percentage = getScrollPercentage();
    let paperBall=document.querySelector("#paperBall");
    let letterPaper=document.querySelector("#letterPaper")
    if(percentage==100){
        paperBall.classList.remove("displayNone");
        letterPaper.classList.add("displayNone")
    }
    else{

    }
})



