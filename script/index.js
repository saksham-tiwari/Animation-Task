var id = null;
var bikeInterval = null;
var btn1 = document.querySelector(".back");
var btn2 = document.querySelector(".stop");
var btn3 = document.querySelector(".forward");
var btn4 = document.querySelector(".wheelie-btn");
var btn5 = document.querySelector(".stoppie-btn");
var btn6 = document.querySelector(".day");

btn1.addEventListener("click", reverse);
btn2.addEventListener("click", play);
btn3.addEventListener("click", forward);
btn4.addEventListener("click", ()=>{
    var CL = document.querySelector(".bike img").classList;
    for(var i=0;i<CL.length;i++){
        if(CL[i]==="stoppie"){
            CL.remove('stoppie');
        }
    }
    document.querySelector(".bike img").classList.toggle('wheelie')});
btn5.addEventListener("click", ()=>{
    var CL = document.querySelector(".bike img").classList;
    for(var i=0;i<CL.length;i++){
        if(CL[i]==="wheelie"){
            CL.remove('wheelie');
        }
    }
    document.querySelector(".bike img").classList.toggle('stoppie')});

btn6.addEventListener("click",()=>{
    if(btn6.innerHTML==="Day"){
        document.querySelector(".block").style.backgroundImage = "url(../img/day.jpg)";
        document.querySelector(".road").style.backgroundImage = "url(../img/Img_023.png)";
        document.querySelector(".bike img").setAttribute("src", "./img/bike3.png");
        document.querySelector("body").style.background = "linear-gradient(to top, #78ffd6, #a8ff78)";
        btn6.innerHTML = "Night";
    } else {
        document.querySelector(".block").style.backgroundImage = "url(../img/1761719.jpg)";
        document.querySelector(".road").style.backgroundImage = "url(../img/Img_02.png)";
        document.querySelector(".bike img").setAttribute("src", "./img/bike.png");
        document.querySelector("body").style.background = "linear-gradient(to bottom, #2C5364, #203A43, #0F2027)";


        btn6.innerHTML = "Day";
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

// forward();
function forward() {
  if(cond === true){
    var elem = document.querySelector(".block");  
    var elem2 = document.querySelector(".block .bike img");  
    elem2.style.left = "0%";

    elem2.classList.remove('reverse');
    var count = 0;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    bikeInterval = setInterval(bike , 50);
    function frame() {
        pos+=1.25; 
        elem.style.backgroundPosition = -pos + 'px -50px'; 
    }
    function bike(){
      if(count === 0){
          elem2.style.bottom = '14px';
          count++;
      }
      else if (count === 1){
          elem2.style.bottom = '16px';
          count++;
      }
      else if(count === 2){
          elem2.style.bottom = '14px';
          count++
      }
      else{
          count = 0;
      }
    }
  }
}
function reverse(){
  if(cond === true){
    var elem = document.querySelector(".block"); 
    var elem2 = document.querySelector(".bike img");
    elem2.style.left = "50%";

    elem2.classList.add('reverse');
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    bikeInterval = setInterval(bike , 50);
    function frame() {
        pos+=1.25; 
        elem.style.backgroundPosition = pos + 'px -50px'; 
    }
    function bike(){
      if(count === 0){
          elem2.style.bottom = '14px';
          count++;
      }
      else if (count === 1){
          elem2.style.bottom = '16px';
          count++;
      }
      else if(count === 2){
          elem2.style.bottom = '14px';
          count++
      }
      else{
          count = 0;
      }
    }
  }
}