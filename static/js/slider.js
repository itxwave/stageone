//let slideIndex = 1;
//showSlides(slideIndex);

let slideIndex = 0;
let timeout;
let interval;
//showSlides();
if (slideIndex == 0) {showSlides(slideIndex+1);}
if (slideIndex == 1) {showSlides(slideIndex);}
//showSlides(slideIndex+1);


// Next/previous controls
function plusSlides(n) {
    console.log("plus slide");
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    console.log("current slide: ", n);
    if (timeout) {
        console.log("timeout found...");
        stopTimeout();
        //stopInterval();
        //showSlides(slideIndex = n);
    };
    //stopTimeout();
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function showSlides() {
    
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (interval) {stopInterval();}
    if (timeout) {stopTimeout();}
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";

    timeout = setTimeout(showSlides, 3000); // Change image every 3 seconds
    //interval = setInterval(() => {showSlides()},2000);
} 

function stopTimeout() {
    console.log("Stop timeout: ", timeout);
    //clearInterval(timeout);
    clearTimeout(timeout);
    timeout = null;
    console.log("--Stop timeout: ", timeout);
}

function stopInterval() {
    console.log("Stop interval: ", interval);
    clearInterval(interval);
    interval = null;
}
