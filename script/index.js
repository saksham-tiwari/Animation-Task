var id = null;
var bikeInterval = null;
var btn1 = document.querySelector(".back");
var btn2 = document.querySelector(".stop");
var btn3 = document.querySelector(".forward");

btn1.addEventListener("click", reverse);
btn2.addEventListener("click", play);
btn3.addEventListener("click", forward);
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