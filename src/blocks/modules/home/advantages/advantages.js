import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

const blogSlider = new Swiper('.advantages__swiper', {
    // Optional parameters
    slidesPerView: '3',
    spaceBetween: 50,
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.advantages__swiper .advantages__dots',
    },

});