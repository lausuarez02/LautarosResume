/*function navSlide(){
   var burger = document.querySelector(".burger");
   var nave = document.querySelector("nav-links");

   burger.addEventListener("click", function(){
    nave.classList.toggle("nav-active");
   });
}

navSlide();*/


var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("open");
    links.forEach(function (link) {
      link.classList.toggle("fade");
    });
  });


  var tick = document.querySelector("h1");

  setInterval(
    function(){
      if(tick.style.backgroundColor == 'white'){
        tick.style.backgroundColor ='black';
      }else{
        tick.style.backgroundColor ='white';
      } 
        
    
    }

,1000);
  





