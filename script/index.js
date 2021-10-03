var id = null;

forward();
function forward() {
  var elem = document.querySelector(".block");  
  var elem2 = document.querySelector(".block .bike img");  
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
