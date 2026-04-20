let monkeyEnclosure = document.querySelector("#monkeyEnclosure");
let giraffeEnclosure = document.querySelector("#giraffeEnclosure");
let snakeEnclosure = document.querySelector("#snakeEnclosure");


function newMonkey(){
    newMonkey("monkey", monkeyEnclosure)
}

function newGiraffe(){
    newAnimal("giraffe", giraffeEnclosure)
}




function newGiraffe(){
    console.log("making new giraffe");
    // make div
    let div = document.createElement("div");
    // add class name 
    div.className = "animal giraffe";
    // make position random
    let randomY = Math.random()*200-100;
    div.style.top = randomY+"px";
    let randomX = Math.random()*600-100;
    div.style.left = randomX+"px";

    // make p tag
    let p = document.createElement("p");
    // add text
    p.innerHTML = "giraf<span>f</span>e";
    
    // attach p tag to div
    div.append(p);

    //attach div to monkey enclosure
    giraffeEnclosure.append(div);
}


function newMonkey(){
    console.log("making new monkey");
    // make div
    let div = document.createElement("div");
    // add class name 
    div.className = "animal monkey";
    // make position random
    let randomY = Math.random()*200-100;
    div.style.top = randomY+"px";
    let randomX = Math.random()*200-100;
    div.style.left = randomX+"px";

    // make p tag
    let p = document.createElement("p");
    // add text
    p.innerText = "monkey";
    
    // attach p tag to div
    div.append(p);

    //attach div to monkey enclosure
    monkeyEnclosure.append(div);
}

function newSnake(){
    // make div
    let div = document.createElement("div");
    // add class name 
    div.className = "animal snake"
    // make position random
    let randomY = Math.random()*200-100;
    div.style.top = randomY+"px";
    let randomX = Math.random()*200-100;
    div.style.left = randomX+"px";

    let ranAngle = Math.random()*360;
    div.style.transform = "rotate("+ranAngle+"deg)"

    // make p tag
    let p = document.createElement("p");
    // add text
    p.innerHTML = "<span>s</span><span>n</span><span>a</span><span>k</span><span>e</span><span>s</span><span>n</span><span>a</span><span>k</span><span>e</span>";
   
    let spans = p.querySelectorAll("span");
    let delay = 0;
    function addDelayedAnimation(element){
        element.style.animation = "snakeWave .5s "+delay+"s linear alternate infinite"
        delay = delay + 0.15;
    }
    spans.forEach(addDelayedAnimation)
    
    // attach p tag to div
    div.append(p);

    //attach div to monkey enclosure
    snakeEnclosure.append(div);
}





function removeElement(element){
    element.remove()
}
function removeAllAnimals(){
    let animals = document.querySelectorAll(".animal");
    animals.forEach(removeElement)
} 





//  not using the below function after all:
function newAnimal(name, enclosure){
    console.log("making new " + name);
    // make div
    let div = document.createElement("div");
    // add class name 
    div.className = "animal " + name;
    // make position random
    let randomY = Math.random()*200-100;
    div.style.top = randomY+"px";
    let randomX = Math.random()*200-100;
    div.style.left = randomX+"px";

    // make p tag
    let p = document.createElement("p");
    // add text
    p.innerText = name;
    
    // attach p tag to div
    div.append(p);

    //attach div to monkey enclosure
    enclosure.append(div);
}