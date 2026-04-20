let inputBox =document.querySelector("#inputBox");

// = select the input element
let output =document.querySelector("#output");

// = select the output div
let myButton =document.querySelector("#myButton");

// = select the button

let clickCounter = 0;



myButton.addEventListener("click",changeOutput);
// challenge 1: 
// when the button is clicked
// change the styling of the output text

function changeOutput(){
    console.log("hello");
    output.style.color="red";
    output.style.backgroundColor="black";
    clickCounter=clickCounter+1;
    if(clickCounter>=10){
        supersize(muButton);
    }


}



// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

inputBox.addEventListener("input",inputChanged)



function inputChanged(eventInfo){
    // console.log(eventInfo);
    // let text=eventInfo.target.value;
    let text=inputBox.value;


// CHECK IF THE VALUE INSIDE THE INPUT IS "SPIN"

    if(text == "spin"){
        console.log("the value is spin");
        spin(inputBox);
    }
// REFLECT THE CURRENT TEXT IN OUTPUT
    output.innerText=text;


}



let angle= 0;
// function to spin an element 
function spin(element){
    angle= angle + 360;
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate("+angle+"360deg)"
}



// -------- PART 2








let messageBoard = document.querySelector("#messageBoard");




function appendCountdown(){
    let clickLeft=10-clickCounter;

    addMessage("press the button "+clickLeft+" times");

}

// appendCountdown();

setInterval(appendCountdown,1000);


// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

