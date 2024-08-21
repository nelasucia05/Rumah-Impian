const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1){
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
var testimonialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    navigation: {
        nextEl: ".swiper-buton-next",
        prevEl: ".swiper-buton-prev",
    },
});