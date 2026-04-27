
let robbie=document.querySelector("#fountainRImg");
let cecelia=document.querySelector("#fountainCImg");
let fountain=document.querySelector("#fountain");
let vaseDrop=document.querySelector("#vaseDrop");
let vaseWrapper=document.querySelector("#vaseWrapper");
let textWrapper=document.querySelector("#textWrapper");
let linesWrapper=document.querySelector("#linesWrapper");
let sceneWrapper=document.querySelector("#sceneWrapper");

robbie.addEventListener("click", function(){
    robbie.style.filter="none";
    let findRobbie=document.createElement("div");
    findRobbie.classList.add("findRobbie");
    findRobbie.innerText="and...Robbie?";
    document.body.append(findRobbie);
})

let btnCloser=document.querySelector("#getCloser");
btnCloser.addEventListener("click",function(){
    
    sceneWrapper.classList.add("bigger");
    let words1=document.createElement("div");
    let words2=document.createElement("div");
    let words3=document.createElement("div");
    let words4=document.createElement("div");
    let words5=document.createElement("div");
    let idiot=document.createElement("a");
    let link=document.createElement("a");


    words1.classList.add("lines","words1");
    words2.classList.add("lines","words2");
    words3.classList.add("lines","words3");
    words4.classList.add("lines","words4");
    words5.classList.add("lines","words5");
    vaseDrop.classList.add("dropAnimation");
    idiot.classList.add("noStyle","idiot");
    link.classList.add("noStyle","link");



    words1.innerText="'Let me take the vase.'";
    words2.innerText="'No, thank you.'";
    words3.innerText="'You'll drop it.'";
    words4.innerText="'I won't'";
    words5.innerText="She twisted away. He did not let go.";
    idiot.innerText="You idiot!";
    link.innerText="Looks like Robbie's gotten into trouble again... I don't like him.";
    idiot.href="page4.html";
    link.href="page4.html";


    linesWrapper.append(words1);
    linesWrapper.append(words2);
    linesWrapper.append(words3);
    linesWrapper.append(words4);
    linesWrapper.append(words5);
    vaseWrapper.append(vaseDrop);
    textWrapper.append(idiot);
    textWrapper.append(link);




}
)

let waterWrapper=document.querySelector("#waterWrapper");

fountain.addEventListener("click",function(){
    makeWater()
})


function makeWater(){
    let div = document.createElement("div");
    div.className = "snake";
    div.style.top="-30px";
    div.style.left =Math.random()*100-30+"%";
    
    div.style.transform = "rotate(90deg)"

    let p = document.createElement("p");
    p.innerHTML = "<span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span><span>w</span><span>a</span><span>t</span><span>e</span><span>r</span>";
    p.style.color="rgb(160, 255, 211)";
   
    let spans = p.querySelectorAll("span");
    let delay = 0;
    function addDelayedAnimation(element){
        element.style.animation = "snakeWave .5s "+delay+"s linear alternate infinite"
        delay = delay + 0.15;
    }
    spans.forEach(addDelayedAnimation)
    div.append(p);
    waterWrapper.append(div)
}