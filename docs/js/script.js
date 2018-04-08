$(document).ready(function(){

  // OWL CAROUSEL SETTINGS
  $('.owl-one').owlCarousel({
    loop:true,
    dotsEach:true,
    autoplay:true,
    autoplayTimeout: 3000,
    items:1
})

$('.owl-two').owlCarousel({
  loop:true,
  dots: false,
  autoplay:true,
  autoplayTimeout: 30000,
  items:1,
})


// const services = document.getElementsByClassName('nav-link')[2];
  let scroll = $(window).scrollTop();
  if (scroll > 1500 ) {
    $('.services').addClass('active-nav-link');
  }else{
    $('.services').removeClass('active-nav-link');
  }

// hamburger menu
const wrapperMenu = document.querySelector('.wrapper-menu');
const mainNav = document.querySelector('.main-nav');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  mainNav.classList.toggle('mobile-nav');
})


});
