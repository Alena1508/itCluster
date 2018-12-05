import {WIN, FIXED} from '../_constants';

const header = $('.js-header');

WIN.on('scroll', function() {
  let scrollTop = WIN.scrollTop();
  (scrollTop > 0)
    ? header.addClass(FIXED)
    : header.removeClass(FIXED);
});
