// Get the video
let video = document.getElementById("myVideo");

// Get the button
let btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
   if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
   } else {
      video.pause();
      btn.innerHTML = "Play";
   }
}