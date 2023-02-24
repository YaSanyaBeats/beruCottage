import simpleParallax from 'simple-parallax-js';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let templateHero = document.querySelectorAll('.template__hero');
new simpleParallax(templateHero, {
    scale: 1.8,
    overflow: true,
});

let templateTitle = document.querySelectorAll('.template__title');
new simpleParallax(templateTitle, {
    scale: 0.1,
    overflow: true,
});

const headerBackgroundSlider = new Swiper('.article__slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,

    pagination: {
        el: '.article__slider-pagination',
        clickable: true
    }
});