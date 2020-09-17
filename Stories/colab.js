var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    zoom: {
      maxRatio: 2,
    },
    direction: 'horizontal',
    loop: true,

    fadeEffect: {
        crossFade: true
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var swiperSlide = document.getElementsByClassName('swiper-slide')
for(var index = 0; index< swiperSlide.length; index++){
swiperSlide[index].addEventListener('mouseover',function(e){
    mySwiper.zoom.in();
})

swiperSlide[index].addEventListener('mouseout',function(e){
    mySwiper.zoom.out();
})
}
