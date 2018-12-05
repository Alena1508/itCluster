import slick from 'slick-carousel';
import {buildIcon} from '../_utils';

const slider = $('.js-slider');
const prev = buildIcon('prev-arrow');
const next = buildIcon('next-arrow');

slider.slick({
  infinite: true,
  dots: true,
  prevArrow: `<button class="slick-prev">${prev}</button>`,
  nextArrow: `<button class="slick-next">${next}</button>`,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
