const swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 20,
    coverflowEffect: {
        rotate: 0,
        strech: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,    
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 5,
        }
    }
});