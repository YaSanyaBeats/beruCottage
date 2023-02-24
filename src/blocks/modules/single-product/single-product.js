import Swiper, {Pagination, Thumbs} from 'swiper';
Swiper.use([Pagination, Thumbs]);

const layoutsSlider = new Swiper('.product__layouts-swiper', {
    // Optional parameters
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.product__layouts-swiper .product__layouts-slider-dots',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    }

});

const mainThumbProductSlider = new Swiper(".product__info-slides", {
    spaceBetween: 30,
    slidesPerView: 3,
    watchSlidesProgress: true,
});

const mainProductSlider = new Swiper('.product__main-slider', {
    // Optional parameters
    spaceBetween: 50,
    grabCursor: true,
    thumbs: {
        swiper: mainThumbProductSlider,
      },
});

