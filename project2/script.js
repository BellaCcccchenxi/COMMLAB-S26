// let cecelia=document.querySelector("#cecelia");

// cecelia.addEventListener('mouseover',Robbie);
// cecelia.addEventListener('mouseout',Cecelia);
// function Robbie(){
//     cecelia.innerText="and...Robbie?";
//     cecelia.classList.add("robbie");
// }

// function Cecelia(){
//     cecelia.innerText="My sister...Cecelia...";
//     cecelia.classList.remove("robbie");
// }
let robbie=document.querySelector("#fountainRImg");
let cecelia=document.querySelector("#fountainCImg");
let fountain=document.querySelector("#fountain");

robbie.addEventListener("click", function(){
    robbie.style.filter="none";
    let findRobbie=document.createElement("div");
    findRobbie.classList.add("findRobbie");
    findRobbie.innerText="and...Robbie?";
    document.body.append(findRobbie);
})

let btnCloser=document.querySelector("#getCloser");
btnCloser.addEventListener("click",function(){
    robbie.classList.add("bigger");
    cecelia.classList.add("bigger");
    fountain.classList.add("bigger");
    let words1=document.createElement("div");
    let words2=document.createElement("div");
    let words3=document.createElement("div");
    let words4=document.createElement("div");
    let words5=document.createElement("div");
    let vaseDrop=document.querySelector("#vaseDrop");
    // let idiot=document.createElement("a");

    words1.classList.add("words1");
    words2.classList.add("words2");
    words3.classList.add("words3");
    words4.classList.add("words4");
    words5.classList.add("words5");
    vaseDrop.classList.add("dropAnimation");
    // idiot.id("#idiot");

    words1.innerText="'Let me take the vase.'";
    words2.innerText="'No, thank you.'";
    words3.innerText="'You'll drop it.'";
    words4.innerText="'I won't'";
    words5.innerText="She twisted away. He did not let go.";
    // idiot.innerText="You idiot!";

    document.body.append(words1);
    document.body.append(words2);
    document.body.append(words3);
    document.body.append(words4);
    document.body.append(words5);
    // document.body.append(idiot);



}
)

let page3Body=document.querySelector("#page3");

page3Body.addEventListener("click",backgroundBox);

function backgroundBox() {
  const newBox = document.createElement('div');
  newBox.className = 'box';
  newBox.style.position = 'absolute';
  newBox.style.left = Math.random() * 500 + 'px';
  newBox.style.top  = Math.random() * 700 + 'px';
  document.body.append(newBox);
}

fountain.addEventListener("click",function(){
    let div = document.createElement("div");
    div.className = "snake";
    div.style.top="100px";
    let randomX = Math.random()*570;
    div.style.left = 365+randomX+"px";
    
    div.style.transform = "rotate(90deg)"

    let p = document.createElement("p");
    p.innerHTML = "<span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span>";
    p.style.color="rgb(160, 255, 211)";
   
    let spans = p.querySelectorAll("span");
    let delay = 0;
    function addDelayedAnimation(element){
        element.style.animation = "snakeWave .5s "+delay+"s linear alternate infinite"
        delay = delay + 0.15;
    }
    spans.forEach(addDelayedAnimation)
    div.append(p);
    document.body.append(div)
})

let vase=document.querySelector("#vase");

vase.addEventListener('mouseover',brokenVase);

function brokenVase(){
}

let letterInput=document.querySelector("#letterInput");
let letterText=document.querySelector("#letterText");

letterInput.addEventListener("input",function(){
    letterText.innerText="Dear Cecilia";
})