let cloudContainer=document.querySelector(".cloudContainer")

function addCloud(){
    let cloud=document.createElement("div");
    cloud.classList.add("cloud");
    let randomX=Math.random() *1000;
    let randomY=Math.random()*400;
    cloud.style.left=randomX+"px";
    cloud.style.top=randomY+"px";
    
    
    cloudContainer.append(cloud);
}

let rainContainer=document.querySelector(".rainContainer")
let heavyRainContainer=document.querySelector(".heavyRainContainer")


function addRain(){
    let allClouds=document.querySelectorAll(".cloud");
    allClouds.forEach(addRaindropToCloud);

    // let cloud=document.querySelector(".cloud");
    // addRaindropToCloud(cloud);
    
}

function addRaindropToCloud(element){
    
    let rainDrop=document.createElement("div");
    rainDrop.classList.add("rainDrop");
    let randomX=Math.random() *100 -10;
    let randomY=Math.random()*40-10;
    rainDrop.style.left=randomX+"px";
    rainDrop.style.top=randomY+"px";
    element.append(rainDrop);

}

function heavyRain(){
    let allClouds=document.querySelectorAll(".cloud");
    allClouds.forEach(addHeavyRain);

}


    
function addRainGroup(){
    let rain=document.createElement("div");
    rain.classList.add("rain");
    rainContainer.append(rain);

    let rainDrop1=document.createElement("div");
    rainDrop1.classList.add("rainDrop");
    rainDrop1.style.position="absolute";
    rainDrop1.style.top=Math.random()*500+"px";
    rain.append(rainDrop1);

    let rainDrop2=document.createElement("div");
    rainDrop2.classList.add("rainDrop");
    rainDrop2.style.position="absolute";
    rainDrop2.style.top=Math.random()*500+"px";
    rain.append(rainDrop2);

    let rainDrop3=document.createElement("div");
    rainDrop3.classList.add("rainDrop");
    rainDrop3.style.position="absolute";
    rainDrop3.style.top=Math.random()*500+"px";
    rain.append(rainDrop3);

    let rainDrop4=document.createElement("div");
    rainDrop4.classList.add("rainDrop");
    rainDrop4.style.position="absolute";
    rainDrop4.style.top=Math.random()*500+"px";
    rain.append(rainDrop4);

    let rainDrop5=document.createElement("div");
    rainDrop5.classList.add("rainDrop");
    rainDrop5.style.position="absolute";
    rainDrop5.style.top=Math.random()*500+"px";
    rain.append(rainDrop5);
}
function addHeavyRain(){
    let heavy=document.createElement("div");
    heavy.classList.add("heavy");
    rainContainer.append(heavy);

    let rainDrop1=document.createElement("div");
    rainDrop1.classList.add("rainDrop");
    rainDrop1.style.position="absolute";
    rainDrop1.style.top=Math.random()*500+"px";
    heavy.append(rainDrop1);

    let rainDrop2=document.createElement("div");
    rainDrop2.classList.add("rainDrop");
    rainDrop2.style.position="absolute";
    rainDrop2.style.top=Math.random()*500+"px";
    heavy.append(rainDrop2);

    let rainDrop3=document.createElement("div");
    rainDrop3.classList.add("rainDrop");
    rainDrop3.style.position="absolute";
    rainDrop3.style.top=Math.random()*500+"px";
    heavy.append(rainDrop3);

    let rainDrop4=document.createElement("div");
    rainDrop4.classList.add("rainDrop");
    rainDrop4.style.position="absolute";
    rainDrop4.style.top=Math.random()*500+"px";
    hevay.append(rainDrop4);

    let rainDrop5=document.createElement("div");
    rainDrop5.classList.add("rainDrop");
    rainDrop5.style.position="absolute";
    rainDrop5.style.top=Math.random()*500+"px";
    heavy.append(rainDrop5);
}

let birdContainer=document.querySelector(".birdContainer")

function addBird(){
    let bird=document.createElement("h1");
    bird.classList.add("bird");
    bird.innerText = "bird";
    birdContainer.append(bird);
}

const body = document.querySelector('body');

function changeWeather() {
    console.log("hrhrhS")
    console.log(body)
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
//   body.style.backgroundColor = 'rgb(“ + r + ”, “ + g + “, “ + b + “)';
  body.style.backgroundColor = 'rgb('   +r+    ','   +g+    ' , '   +b+    ')';

}

let floodContainer=document.querySelector(".floodContainer")

function addFlood(){
    let flood=document.createElement("div");
    flood.classList.add("flood");
    floodContainer.append(flood);
}

let fishContainer=document.querySelector(".fishContainer")

function addFish(){
    let fish=document.createElement("div");
    fish.classList.add("fish");
    fishContainer.append(fish);
    allfish.forEach(randomColor);
}

function randomColor() {
  let fish=document.createElement("div");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  fish.style.backgroundColor = 'rgb(“ + r + ”, “ + g + “, “ + b + “)';
}

