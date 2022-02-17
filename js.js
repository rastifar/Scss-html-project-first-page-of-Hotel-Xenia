
//second Carousel
let slideIndex = 0;
showSlides();
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
   // Change image every 2 seconds
}
window.onload= function () {
  setInterval(function(){
    showSlides();
  }, 3000);
  }


//3rd carousel
// let slideIndexT = 0;
// showTestSlides();

// function showTestSlides() {
//   let i;
//   let testslides = document.getElementsByClassName("myTestSlides");
//   for (i = 0; i < testslides.length; i++) {
//     testslides[i].style.display = "none";
//   }
//   slideIndexT++;
//   if (slideIndexT > testslides.length) {slideIndexT = 1}
//   testslides[slideIndexT-1].style.display = "flex";
//   setTimeout(showTestSlides, 2000); // Change image every 2 seconds
// }

