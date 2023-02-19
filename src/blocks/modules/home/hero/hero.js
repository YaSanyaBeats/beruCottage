// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

import simpleParallax from 'simple-parallax-js';

const headerBackgroundSlider = new Swiper('.header__swiper', {
    // Optional parameters
    direction: 'horizontal',
});

let heroVideos = document.querySelectorAll('.hero__video');
if(heroVideos.length > 0) {
    new simpleParallax(heroVideos, {
        scale: 0.1,
        overflow: true,
    });
}