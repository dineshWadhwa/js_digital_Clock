window.addEventListener('load', time);

function time(){
let ctime = new Date()
let  hrs = addZero(ctime.getHours());
let mins = addZero(ctime.getMinutes());
let sec = addZero(ctime.getSeconds());


document.getElementById("hours").innerHTML = hrs;
document.getElementById("mins").innerHTML = mins; 
document.getElementById("seconds").innerHTML = sec;

if(hrs>=12){
    session.innerHTML ='PM'
}
else{
    session.innerHTML ='AM'
}
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
setInterval(time,1000)