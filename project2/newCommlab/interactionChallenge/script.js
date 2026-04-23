// // old code:
// function spanHovered(eventInfo){
//     console.log("hello");

//     let btn  = document.querySelector("button");

//     eventInfo.target.style.color = "red";
//     let randomX = Math.random()*200-100; // -100 to 100
//     let randomY = Math.random()*200-100; // -100 to 100
//     eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
// }

// function addMover(element){
//     element.addEventListener("mouseover", spanHovered);
// }

// let allSpans = document.querySelectorAll("span");
// allSpans.forEach(addMover)




let max_y=Math.random()*600-300;

window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();
    console.log("hello");
    let firstSpan=document.querySelector("span:nth-child(1)");
    let min_y=0;
    firstSpan.style.top=max_y*(1-percentage)+ "px";
    document.querySelector("span:nth-child(2)")


    // select the first letter
    // move it using the "top" attribute 
    // move it to a point that involves the percentage variable
    
})


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


function spinElm(element){
    let ranDegree=Math.random()*1000;
    element.style.transform = "rotate("+ranDegree+"deg)";
}

function spinAllLetters(){
    let allSpans=document.querySelectorAll("span");
    allSpans.forEach(spinElm);
}

document.querySelector("#spinButton").addEventListener("click",spinAllLetters);