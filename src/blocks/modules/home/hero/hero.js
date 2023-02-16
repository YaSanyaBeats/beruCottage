// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
console.log(123);

const headerBackgroundSlider = new Swiper('.header__swiper', {
    // Optional parameters
    direction: 'horizontal',
});