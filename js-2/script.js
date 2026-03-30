function addParagraph(){

    let paragraph=document.createElement('p');
    paragraph.innerText="does it work?";
    document.body.append(paragraph);
}
let container= document.querySelector(".boxContainer");

function addBox(){
    let box= document.createElement("div");
    box.className="box";

    container.append(box);
   

}

function removeAll(){
    container.remove();
}

function moveContainer(){

    let randomNumber= (Math.random()*200)-100;
    console.log(randomNumber);
    let container= document.querySelector(".boxContainer");
    container.style.left=randomNumber+"px";
  

}