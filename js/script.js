let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function(){

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click',function(){

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
});

// let tabsBtn = document.querySelectorAll('.how-working__link');
// let tabsItem = document.querySelectorAll('.how-working__block');

// tabsBtn.forEach(function(element){
//   tabsBtn.addEventListener('click', function(e){
//     const path = e.currentTarget.dataset.path;

//     tabsBtn.forEach(function(btn){ btn.classList.remove('how-working__link--active')});
//     e.currentTarget.classList.add('how-working__link--active');

//     tabsItem.forEach(function(element){ element.classList.remove('how-working__block--active')});
//     document.querySelector('[data-target="${path}"]').classList.add('how-working__block--active');
//   });
// });

document.querySelectorAll('.how-working__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.how-working__link').forEach(function(btn){
btn.classList.remove('how-working__link--active')});
  e.currentTarget.classList.add('how-working__link--active');
  document.querySelectorAll('.how-working__block').forEach(function(tabsBtn){
    tabsBtn.classList.remove('how-working__block--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('how-working__block--active');
  });
});

// const swiper = new Swiper('.swiper', {
//     slidesPerView: 1,
//     loop: true,

//   // пагинация
//     pagination: {
//     el: '.swiper-pagination',
//   },
// });

// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();



// var mySwiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 100
// });

// var mySwiper = document.querySelector('.swiper').swiper-wrapper

// // Now you can use all slider methods like
// mySwiper.slideNext();
$(document).ready(function(){
  const swiper = new Swiper ('.swiper',{
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clicable: true,
      renderBullet: function (index, className) {
            return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
        }
    },
});

});

let lyp = document.querySelector('.nav__link_loop');
let pole = document.querySelector('.header__search-icon');
let exit = document.querySelector('.exit');

lyp.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

exit.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});
