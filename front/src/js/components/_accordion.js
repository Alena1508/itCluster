import { OPEN } from '../_constants';
const accordion = $('[data-accordion]');
const allContainers = $('[data-accordion-container]');
const trigger = $('[data-accordion-trigger]');

trigger.on('click',function(e) {
  e.preventDefault();
  const that = $(this);
  const parent = that.parents('[data-accordion]');
  const container = parent.find('[data-accordion-container]');
  if (!parent.hasClass(OPEN)) {
    parent.addClass(OPEN);
    allContainers.slideUp(500);
    container.slideDown(500);
  }
  else {
    container.slideUp(500);
    parent.removeClass(OPEN);
  }
});

