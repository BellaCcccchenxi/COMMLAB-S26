# Atonement

## Memory, Misunderstanding, and the Fragility of Truth
*An Interactive Retelling of Atonement Through Briony’s Perspective*

### About the Project
This website is an adaptation of the novel and film Atonement. Narrated from the perspective of Briony Tallis, the younger sister of Cecilia, the project recreates the misunderstandings and emotional tensions between Cecilia, Robbie, and Briony during the summer of 1935. Through a series of interactive scenes, users gradually uncover fragmented memories, shifting perspectives, and hidden truths.

The website combines cinematic imagery with interactive storytelling. Click events, scrolling triggers, and screen percentage calculations are used to control narrative pacing and visual transitions. As the story progresses, the boundary between imagination, guilt, memory, and reality becomes increasingly unstable, mirroring Briony’s own struggle with atonement.

### Abstract
I chose to adapt Atonement because I deeply admire both the novel and the film. Beyond its emotional story, the work contains rich symbolism, layered misunderstandings, and visually striking scenes that strongly resonate with audiences. I felt that its cinematic language and themes of memory and guilt were especially suitable for transformation into an interactive website experience.

The project reinterprets several iconic moments from the story through web interaction. Rather than passively watching events unfold, users participate in Briony’s reconstruction of memory by clicking, scrolling, and revealing hidden details. Interactions are designed to reflect emotional shifts within the narrative: fragmented text mirrors unstable thoughts, blurred visuals represent uncertainty and misunderstanding, and repeated reveals of “truth” emphasize the instability of memory itself.

The website also explores the tension between fiction and reality that defines the ending of Atonement. By repeatedly overturning the audience’s expectations in the final scene, the project recreates Briony’s attempt to rewrite reality through imagination while confronting the impossibility of fully repairing the past.

### Preview
| Image | Description |
|-------|-------------|
| ![fountain](screenshot1.png) | The fountain scene recreates the moment when Robbie breaks the vase. Clicking the fountain causes flowing “water” text to emerge while Robbie appears blurred and trembling, encouraging the user to interact with him and gradually uncover the scene.|
| ![letter](screenshot2.png) | The typewriter sequence visualizes Robbie writing his apology letter and later transforming it into the explicit second letter for Cecilia. The original text scatters apart while new words reorganize themselves across the paper, reflecting Robbie’s changing thoughts and memories. |
| ![shouting](screenshot3.png) | The final pages repeatedly reveal “the truth” through interactive buttons and narrative reversals, echoing the ending of the novel where imagination, confession, and reality become impossible to separate completely. |

### Try It Yourself
[https://bellaccccchenxi.github.io/COMMLAB-S26/project2/](https://bellaccccchenxi.github.io/COMMLAB-S26/project2/)

---

## Reflections
### 1 Process: Design & Composition
#### Adapting Cinematic Language into Web Interaction
One of the central goals of this project was translating the emotional and visual language of Atonement into an interactive web experience. Instead of simply retelling the story, I wanted users to actively participate in the reconstruction of memory and misunderstanding.

The project heavily references the film’s visual atmosphere: soft lighting, elegant compositions, blurred movement, and symbolic objects such as the fountain, vase, letters, and typewriter. I tried to preserve the emotional tension of the original scenes while allowing interaction to control pacing and discovery.

For example, Robbie initially appears blurred and slightly trembling in the fountain scene. This visual ambiguity encourages curiosity while also symbolizing Briony’s incomplete understanding of events. Only after the user clicks him does the image become clear and narrative information appear.

#### The Fountain Scene as Interactive Narrative
The fountain sequence became the most carefully developed part of the project because it represents the beginning of the central misunderstanding in the story.

Several layered interactions were combined to guide the user emotionally through the scene:

- Clicking the fountain releases animated “water” text that visually imitates flowing water

- Robbie’s blurred figure subtly vibrates to attract user attention

- Clicking Robbie reveals his identity and emotional context

- A shaking “get closer” button appears, encouraging interaction between Robbie and Cecilia
- As the characters move closer together, their dialogue gradually fades onto the screen
- Robbie and the vase shift left before the vase suddenly falls, recreating the famous vase-breaking moment

Rather than presenting the event directly, the interaction structure mirrors Briony’s fragmented observation of the scene. The audience experiences the moment piece by piece, just as Briony misunderstands it piece by piece.
#### Typography and Memory Fragmentation
The fourth page, centered on Robbie writing his letter, focuses on typography as emotional storytelling.

The original apology letter slowly disperses across the screen as Robbie’s memories of Cecilia interrupt his thoughts. Simultaneously, new words reorganize themselves into the second letter. This transition visualizes the conflict between restraint and desire while representing how memory itself can reshape written language.

The movement of scattered text also reflects the instability of thought and narration throughout the story. Since Atonement constantly questions what is real and what is imagined, fragmented typography became an important visual metaphor for unreliable memory.
#### Gestalt Principles in Design
I used several Gestalt principles to organize emotional focus and visual storytelling:

- Proximity groups dialogue and character interactions together to guide narrative reading order
- Similarity creates visual consistency between recurring symbolic elements such as letters, typewriter text, and truth buttons
- Closure allows users to mentally complete fragmented scenes and incomplete information, mirroring Briony’s own assumptions and misunderstandings
- Figure-ground relationships are emphasized through blur effects and fade transitions, especially in scenes where truth and uncertainty overlap

### 2 Process: Technical Implementation
#### HTML Structure
The project is organized through scene-based HTML sections, with each page functioning as an individual narrative environment:

- fountainScene for the fountain interaction
- letterText and .typeWrapper for the typewriter sequence
- truthButton sections for the ending reveals
- Reusable containers for dialogue, overlays, and animated text elements

Most interactive components are separated into independent containers so animations and transitions can be controlled individually through JavaScript and CSS.

#### JavaScript Interactions
The project primarily relies on click events, scroll triggers, and percentage-based calculations to create cinematic transitions between states.

One major interaction system controls the transformation of Robbie’s letter text:

```js

function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}

let allSpans = document.querySelectorAll(".letterSpan");
let allSpans2 = document.querySelectorAll(".letterSpan2");
let letterPaper=document.querySelector("#letterPaper");
let envelope=document.querySelector("#envelope");


allSpans.forEach(function(span){
    span.randomX = Math.random()*1000 - 600;
    span.randomY = Math.random()*1000 - 600;
})

allSpans2.forEach(function(span){
    span.randomX = Math.random()*2000 - 1000;
    span.randomY = Math.random()*2000 - 1000;
})

let btn1=document.createElement("button");
let btn2=document.querySelector("button");


function positionLetterTexts(){
    // letter1
    let percentage = getScrollPercentage();
    allSpans.forEach(function(span){
        let x=span.randomX;
        let y=span.randomY;
        span.style.transform = "translate("+x*percentage+"px,"+y*percentage+"px)";
        span.style.color="rgba(0,0,0,"+(1-percentage)+")";

    });
    // letter2
    allSpans2.forEach(function(span){
        let x=span.randomX;
        let y=span.randomY;
        span.style.transform = "translate("+x*(1-percentage)+"px,"+y*(1-percentage)+"px)";
        span.style.color="rgba(0,0,0,"+percentage+")";
    });
    // if(percentage>0.95){
    //     document.querySelector("#letterPaper").classList.add("inviteInteraction");
    // }

    if(percentage>0.99){
        btn1.innerText="I can not let her know"
        btn1.classList.add("btn1");
        letterText.append(btn1);

    }
}

// position texts one time at the very start of the page
// to make sure all letters (the second one!!) are in place
positionLetterTexts();


window.addEventListener("scroll", function(){
    
    // position letters every time the scrolling changes
    positionLetterTexts();
    playSound();
})


let typeWrapper=document.querySelector("#typeWrapper");
let text4=document.querySelector("#text4");
let letterText=document.querySelector("#letterText");
let text2=document.createElement("p");


btn1.addEventListener("click",function(){
    paperBall.classList.remove("displayNone");
    paperBall.classList.add("throw");
    text4.classList.add("fadeAway");
    btn1.classList.add("fadeAway");
    btn1.classList.remove("inviteInteraction");
    let btn2=document.createElement("button");
    btn2.innerText="The previous letter is better";
    btn2.classList.add("btn2");
    letterText.append(btn2);
    btn2.addEventListener("click",function(){
        allSpans.forEach(function(span){
     
        span.style.transition="transform 1s ease-out";
        span.style.transform = "translate(0,0)";
        span.style.color="black";
        });
        letterText.addEventListener("click",function(){
        letterPaper.classList.add("fadeAway2");
        letterText.classList.add("fadeAway2");
        envelope.classList.remove("displayNone");
        envelope.classList.add("envelopeAppear");
        let lines=document.createElement("a");
        lines.href="page5.html";
        typeWrapper.append(lines);
        lines.innerText="Briony is outside..."
        lines.classList.add("lines");
        })

    })



})










```
This interaction allows the first letter to gradually scatter apart while the second letter assembles itself as the user scrolls, visually representing Robbie’s shifting thoughts.

#### Technical Difficulties & Solutions

Preventing Overlapping Text During Scroll

One technical issue occurred when the letter positioning function was only triggered during scrolling. Initially, both versions of the letters appeared overlapped on the screen before any scrolling happened.

To solve this problem, the positioning function needed to be executed once immediately when the page loads rather than only inside the scroll event listener.

#### CSS and Visual Effects

CSS animations and transitions were heavily used throughout the project to create cinematic movement:

- Blur filters simulate uncertainty and fragmented memory
- Opacity transitions gradually reveal dialogue and truth
- Vibrating animations direct user attention toward interactive objects
- Translate transformations create physical movement for characters, letters, and props
- Layered z-index positioning helps separate reality, memory, and narration visually

The overall color palette was inspired by the film’s muted greens, creams, shadows, and warm lighting to preserve the visual atmosphere of the original work.


### 3 Reflection and Future Development
#### Project Evolution & Critical Reflections
The project originally began as a straightforward adaptation of several memorable scenes from Atonement. However, as development progressed, it became more focused on interactive narration and emotional perspective rather than scene recreation alone.

One important realization during production was that interaction itself could function as storytelling. Clicking, scrolling, waiting, and revealing information all became ways to simulate Briony’s fragmented perception and emotional guilt.

**Successful Elements**:
- The fountain sequence successfully combines interaction, animation, and symbolism to recreate emotional tension from the film
- The scattered typography effect effectively visualizes Robbie’s emotional conflict and unstable thoughts
- The repeated “truth” reveals at the ending capture the narrative reversals and ambiguity central to Atonement
- The visual atmosphere closely reflects the film’s cinematic tone and symbolic imagery

**Less Satisfying Elements**:
- Some transitions between scenes still feel abrupt and could be smoother narratively
- Certain animations become laggy on slower devices because of the large number of moving span elements
- The ending interactions could be more emotionally impactful with sound design or voice elements
- Mobile responsiveness still needs improvement for smaller screen sizes

#### Feedback Integration
Feedback from peers and instructors mainly focused on narrative clarity and pacing:
1. **Interaction Guidance**: Some users initially did not realize certain objects were clickable, so subtle vibration and hover effects were added to guide attention
2. **Narrative Continuit**: Transitions between scenes were adjusted to better connect emotional progression
3. **Typography Readability**: The scattered letter animation was refined so users could still partially read the text during movement instead of losing all legibility

#### Future Development Plans
- Add background sound design such as typewriter sounds, water effects, and ambient room noise
- Improve mobile responsiveness and optimize animation performance
- Expand interactive storytelling with additional scenes from the novel and film
- Introduce more dynamic transitions between memory and reality
- Add alternative narrative paths where users can uncover different fragments of the story depending on interaction choices
### 4 Credits & References
- Film stills and visual references were collected from Pinterest, Google Images, and Bilibili film screenshots
- The project is adapted from the novel Atonement and the film Atonement
- Inspiration for visual symbolism and narrative structure comes from the original film’s cinematography and storytelling techniques
- Peer feedback contributed to interaction guidance and animation refinement
