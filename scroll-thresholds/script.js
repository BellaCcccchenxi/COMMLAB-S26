window.addEventListener("scroll", function(){
    // console.log("we are scrolling");
    let percentage=getScrollPercentage();
    console.log("percentage",percentage);

    if(percentage>33){
        console.log("paragraph appeared");
        document.querySelector(".one p").style.transform="rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform="rotate(0deg)";

    }

    if(percentage>77){
        console.log("paragraph appeared");
        document.querySelector(".two p").style.transform="scale(0.5)";
        document.querySelector(".two p").style.backgroundColor="yellow";

    }else{
        document.querySelector(".two p").style.transform="scale(3)";
        document.querySelector(".two p").style.backgroundColor="purple";


    }

    let windowWidth=window.innerWidth;
    let cat_x_max=windowWidth-100;
    let cat_x=cat_x_max *(percentage/100);
    document.querySelector("#catImg");
    catImg.style.transform="translate("+cat_x+"px,50px)";


})

function getScrollPercentage(){
    let scrollAlready=window.scrollY;
    let pageHeight=document.body.scrollHeight;
    let windowHeight=window.innerHeight;
    let possibleScrollSpace=pageHeight-windowHeight;
    // console.log(scrollAlready,possibleScrollSpace)
    let percentage=(scrollAlready/possibleScrollSpace)*100;
    console.log("percentage",percentage);
    return percentage;
}

