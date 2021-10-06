var id = null;
var speed = 1.25;
var btn1 = document.querySelector(".back");
var btn2 = document.querySelector(".stop");
var btn3 = document.querySelector(".forward");
var btn4 = document.querySelector(".wheelie-btn");
var btn5 = document.querySelector(".stoppie-btn");
var btn6 = document.querySelector(".day");
var btn7 = document.querySelector(".speeddown");
var btn8 = document.querySelector(".speedup");


btn1.addEventListener("click", reverse);
btn2.addEventListener("click", play);
btn3.addEventListener("click", forward);
btn4.addEventListener("click", wheelie);
btn5.addEventListener("click", stoppie);
btn6.addEventListener("click",toggleMode);
btn7.addEventListener("click",()=>{speed-=0.25});
btn8.addEventListener("click",()=>{speed+=0.25});


window.addEventListener("keydown",function(event){
    var y=true;
    var x = document.querySelector(".bike img");
    var classes = x.classList;
    for(var i=0;i<classes.length;i++){
        if(classes[i]==='reverse'){
            y=false;
            break;
        }
    }
    if(y&&(event.key==="a"||event.key==="A")){
        wheelie();
    }
    }
)
window.addEventListener("keyup",function(event){
    if(event.key==="a"||event.key==="A"){
        document.querySelector(".bike img").classList.remove('wheelie')
    }
    }
)

window.addEventListener("keydown",function(event){
    var y=true;
    var x = document.querySelector(".bike img");
    var classes = x.classList;
    for(var i=0;i<classes.length;i++){
        if(classes[i]==='reverse'){
            y=false;
            break;
        }
    }
    if(y&&(event.key==="d"||event.key==="D")){
        stoppie();
    }
    }
)
window.addEventListener("keyup",function(event){
    if(event.key==="d"||event.key==="D"){
        document.querySelector(".bike img").classList.remove('stoppie')
    }
    }
)

window.addEventListener("keypress",function(event){
    if(event.code==="Space"){
        play();
    }
})

window.addEventListener("keypress", function(event){
    if(event.code==="Enter"){
        toggleMode();
    }
})



var cond = false;
function play(){
    if (cond === true){
        cond = false;
        location.reload();
    } else {
        cond = true;
    }
    forward();
}

function forward() {
  if(cond === true){
    var elem = document.querySelector(".block");  
    var elem2 = document.querySelector(".block .bike img"); 
    document.querySelector(".wheelie-btn").style.background ="linear-gradient(to right, #24243e, #302b63, #0f0c29"; 
    document.querySelector(".stoppie-btn").style.background ="linear-gradient(to right, #24243e, #302b63, #0f0c29"; 
    btn4.disabled = false;
    btn5.disabled = false;
    elem2.style.left = "0%";

    elem2.classList.remove('reverse');
    var count = 0;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        pos+=speed; 
        elem.style.backgroundPosition = -pos + 'px -50px'; 
    }
  }
}
function reverse(){
  if(cond === true){
    var elem = document.querySelector(".block"); 
    var elem2 = document.querySelector(".bike img");
    elem2.style.left = "50%";
    document.querySelector(".wheelie-btn").style.background ="linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"; 
    document.querySelector(".stoppie-btn").style.background ="linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"; 
    btn4.disabled = true;
    btn5.disabled = true;
    elem2.classList.add('reverse');
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        pos+=speed; 
        elem.style.backgroundPosition = pos + 'px -50px'; 
    }
  }
}

function toggleMode(){
    if(btn6.innerHTML==="Day"){
        document.querySelector(".block").style.backgroundImage = "url(img/day.jpg)";
        document.querySelector(".road").style.backgroundImage = "url(img/Img_023.png)";
        document.querySelector(".bike img").setAttribute("src", "img/bike3.png");
        document.querySelector("body").style.background = "linear-gradient(to top, #78ffd6, #a8ff78)";
        btn6.innerHTML = "Night";
    } else {
        document.querySelector(".block").style.backgroundImage = "url(img/1761719.jpg)";
        document.querySelector(".road").style.backgroundImage = "url(img/Img_02.png)";
        document.querySelector(".bike img").setAttribute("src", "img/bike.png");
        document.querySelector("body").style.background = "linear-gradient(to bottom, #2C5364, #203A43, #0F2027)";
        btn6.innerHTML = "Day";
    }
}

function wheelie(){
    var CL = document.querySelector(".bike img").classList;
    for(var i=0;i<CL.length;i++){
        if(CL[i]==="stoppie"){
            CL.remove('stoppie');
        }
    }
    document.querySelector(".bike img").classList.toggle('wheelie')
}

function stoppie(){
    var CL = document.querySelector(".bike img").classList;
    for(var i=0;i<CL.length;i++){
        if(CL[i]==="wheelie"){
            CL.remove('wheelie');
        }
    }
    document.querySelector(".bike img").classList.toggle('stoppie')
}