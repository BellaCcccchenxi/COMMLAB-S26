let brionyRun=document.querySelector("#brionyRun");
let readWrapper=document.querySelector("#readWrapper");
// let ceceliaRead=document.querySelector("#ceceliaRead");
let ceceliaRead1=document.querySelector("#ceceliaRead1");
let ceceliaRead2=document.querySelector("#ceceliaRead2");
let ceceliaRead3=document.querySelector("#ceceliaRead3");
let ceceliaRead4=document.querySelector("#ceceliaRead4");


brionyRun.addEventListener("click",function(){
    readWrapper.classList.add("appear");
    brionyRun.classList.add("fadeAway");
})

readWrapper.addEventListener("click",function(){
    readWrapper.classList.add("fadeAway");
    brionyRun.classList.remove("displayNone");
    brionyRun.classList.add("fadeAway2");
    // ceceliaRead.classList.add("appear2");
    ceceliaRead1.classList.add("ImgAppear1");
    ceceliaRead2.classList.add("ImgAppear2");
    ceceliaRead3.classList.add("ImgAppear3");
    ceceliaRead4.classList.add("ImgAppear4");


})


