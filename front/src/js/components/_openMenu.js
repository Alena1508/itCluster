import {OPEN} from '../_constants';

const header = $('.js-header');
const btnMenu = $('.js-btn-menu');

btnMenu.on('click', () => {
  header.toggleClass(OPEN);
});
