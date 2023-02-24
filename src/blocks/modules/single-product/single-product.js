import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

const blogSlider = new Swiper('.product__swiper', {
    // Optional parameters
    slidesPerView: '1',
    slidesPerGroup: '1',
    spaceBetween: 50,
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.product__swiper .product__slider-dots',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    }

});