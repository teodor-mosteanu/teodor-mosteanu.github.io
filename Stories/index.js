var swiper = new Swiper('.swiper-container2', {
    effect: 'cube',
    speed: 5400,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    fadeEffect: {
        crossFade: true
      },
    autoplay: {
        delay: 100,
      },
    pagination: {
      el: '.swiper-pagination',
    },
  });
var swiper2=document.getElementsByClassName("swiper-slide");
for (var i = 0 ; i < swiper2.length; i++) {
    swiper2[i].addEventListener('click' , ()=> {window.location.href='./story.html'} ) ; 
 }
// swiper2.addEventListener("click", ()=> {window.location.href='http://www.google.com/'});

