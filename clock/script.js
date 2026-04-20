let timeWrapper=document.querySelector("#timeWrapper");
// let div1=document.createElement("div");
// let seconds=document.createElement("img");
// div1.classList.add("div1");
// seconds.classList.add("seconds");

// let div2=document.createElement("div");
// let minutes=document.createElement("img");
// div2.classList.add("div2");
// minutes.classList.add("minutes");

// let div3=document.createElement("div");
// let hours=document.createElement("img");
// div3.classList.add("div3");
// hours.classList.add("hours");

let seconds=document.querySelector(".seconds");
let minutes=document.querySelector(".minutes");
let hours=document.querySelector(".hours");

let dot1=document.querySelector("#dot1");
let dot2=document.querySelector("#dot2");
let dot3=document.querySelector("#dot3");
let dot4=document.querySelector("#dot4");



function getTheTime(){
    let now = new Date();   // gets the time of the current moment. “Hey, JS, what time is it?”
    let h = now.getHours();    // 0–23
    let m = now.getMinutes();  // 0–59
    let s = now.getSeconds();  // 0–59

    if(s%2==0){
        dot1.style.backgroundColor="black"
    }
    else{
        dot1.style.backgroundColor="white";
    }
    if(s%2==0){
        dot2.style.backgroundColor="black"
    }
    else{
        dot2.style.backgroundColor="white";
    }
    if(s%2==0){
        dot3.style.backgroundColor="black"
    }
    else{
        dot3.style.backgroundColor="white";
    }
    if(s%2==0){
        dot4.style.backgroundColor="black"
    }
    else{
        dot4.style.backgroundColor="white";
    }
    
    let c;
    if(s>0){
        c=s/60;
    }else{
        c=0;
    }
    document.body.style.backgroundColor="rgba(0, 0, 0, "+c+")";
    document.body.classList.add("color");

    let secondsAge;
    if(s>0){
        secondsAge=s+1;
    }else{
        secondsAge=1;
    }
    let secondsIdx = String(secondsAge).padStart(3, '0')
    let secondsPath = "photos_women 2/w-" +secondsIdx+ "-hr@400.jpg";
    console.log(secondsPath);
    seconds.src=secondsPath;

    let minutesAge;
    if(m>0){
        minutesAge=m+1;
    }else{
        minutesAge=1;
    }
    let minutesIdx = String(minutesAge).padStart(3, '0')
    let minutesPath = "photos_women 2/w-" +minutesIdx+ "-hr@400.jpg";
    console.log(minutesPath);
    minutes.src=minutesPath;

    let hoursAge;
    if(h>0){
        hoursAge=h+1;
    }else{
        hoursAge=1;
    }
    let hoursIdx = String(hoursAge).padStart(3, '0')
    let hoursPath = "photos_women 2/w-" +hoursIdx+ "-hr@400.jpg";
    console.log(hoursPath);
    hours.src=hoursPath;

}
setInterval(getTheTime, 400);

// div1.append(seconds);
// timeWrapper.append(div1);

// div2.append(minutes);
// timeWrapper.append(div2);

// div3.append(hours);
// timeWrapper.append(div3);




// clock sounds every second
// random male female
// fix the 0+1 thing
// dots black/white, blinking like a clock