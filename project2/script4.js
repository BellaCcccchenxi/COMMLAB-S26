

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
    if(percentage>0.95){
        document.querySelector("#letterPaper").classList.add("inviteInteraction");
    }
}

// position texts one time at the very start of the page
// to make sure all letters (the second one!!) are in place
positionLetterTexts();


window.addEventListener("scroll", function(){
    
    // position letters every time the scrolling changes
    positionLetterTexts();
    
    // // paperBall
    // let percentage = getScrollPercentage();
    // console.log(percentage)
    // let paperBall=document.querySelector("#paperBall");
    // let letterPaper=document.querySelector("#letterPaper")
    // if(percentage>0.95){
    //     paperBall.classList.remove("displayNone");
    //     letterPaper.classList.add("displayNone")
    // }
    // else{
    //     paperBall.classList.add("displayNone");
    //     letterPaper.classList.remove("displayNone")        
    // }
})


let typeWrapper=document.querySelector("#typeWrapper");
let text4=document.querySelector("#text4");
let letterText=document.querySelector("#letterText");
let text2=document.createElement("p");


typeWrapper.addEventListener("click",function(){
    paperBall.classList.remove("displayNone");
    paperBall.classList.add("throw");
    text4.classList.add("fadeAway");
    text2.innerText="You’d be forgiven for thinking me mad—the way I acted this afternoon. The truth is I feel rather lightheaded and foolish in your presence, Cee, and I don’t think I can blame the heat.Will you forgive me?";
    text2.classList.add("text2");
    letterText.append(text2);
    document.querySelector("#letterPaper").classList.remove("inviteInteraction");

})



text2.addEventListener("click",function(){
    letterPaper.classList.add("fadeAway");
    letterText.classList.add("fadeAway");
    envelope.classList.remove("displayNone");
    envelope.classList.add("envelopeAppear");
    let lines=document.createElement("a");
    lines.href="page5.html";
    typeWrapper.append(lines);
    lines.innerText="‘Briony, hi. ‘You couldn’t do me a favour, could you? Take this note to Cecilia. Run ahead and give it to her. It’s important.’"
    lines.classList.add("lines");
})




