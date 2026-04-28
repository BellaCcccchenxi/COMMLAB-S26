function getScrollPercentage(){
    let scrollAlready=window.scrollY;
    let pageHeight=document.body.scrollHeight;
    let windowHeight=window.innerHeight;
    let possibleScrollSpace=pageHeight-windowHeight;
    let percentage=(scrollAlready/possibleScrollSpace);
    console.log("percentage",percentage);
    return percentage;
}
window.addEventListener("scroll", function(){
    let percentage=getScrollPercentage();
    let windowWidth=window.innerWidth;
    let brionyRun_x_max=windowWidth-100;
    let brionyRun_x=brionyRun_x_max *(percentage);
    let brionyRun=document.querySelector("#brionyRun");
    brionyRun.style.transform="translate("+brionyRun_x+"px,50px)";
})