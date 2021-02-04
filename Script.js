window.onload = function(){
  let start = false;
  let now;
  let endTimer;
  let distance;

document.getElementById("playButton") .addEventListener("click",function(){
event.preventDefault();
setTimeout(playSound,2000);

  })

  if (start === false){
  // Get today's date and time
  now = new Date().getTime();
  endTimer = now + 3600000;
  start =true;
  // console.log(now);
  // console.log(endTimer);
  }
  // Update the count down every 1 second
  let interval = setInterval(function() {
  // Get today's date and time
   now = new Date().getTime();
  // Find the distance between now and the count down time
   let distance =  endTimer-now;
   // console.log(distance);
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   // console.log(minutes);
  // Display the result in the element with id="timerCountdown"
  document.getElementById("timerCountdown").innerHTML = minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerCountdown").innerHTML = "It's time for a break!";
  }
});
var x = document.getElementById("alertSFX");
function playSound(){
  console.log(x);
  x.play();
  alert('Take A 10 min Break! Your deserve it!');
}
// let noteElement = document.getElementById("change");
// noteElement.addEventListener("mouseover", hoverFunction);
// noteElement.addEventListener("mouseout", offFunction);
// function hoverFunction(){
//   // console.log("note over");
//   let imageElement = document.getElementById("change");
//   imageElement.src = "images/Post-it_Design2.png";
  let paragraph = document.getElementById("paragraph");
  paragraph.textContent = "Lunch is in the fridge!";
// }
// function offFunction(){
//   // console.log("note off");
//   let imageElement = document.getElementById("change");
//   imageElement.src = "images/Post-it_Design.png";
  let paragraph = document.getElementById("paragraph");
  paragraph.textContent = "Keep up the good work!";
// }
}
