let loveMusic=document.querySelector("#loveMusic");

document.body.addEventListener("click",function(){
  loveMusic.loop=true;
  loveMusic.play();
  console.log("hi");
})