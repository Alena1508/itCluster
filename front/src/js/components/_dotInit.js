import 'dotdotdot';
import { OPEN, SHOW, WIN } from '../_constants';
const cards = $('.js-card');

const initDot = containers => {
  containers.each(function() {
    const dotContainer = $(this);
    const height = dotContainer.data('dot');
    dotContainer.dotdotdot({
      height: height,
      truncate: 'word',
      watch: true
    });
  });
};
cards.each(function() {
  const card = $(this);
  const trigger = card.find('.js-dot-trigger');
  const triggerTextOpen = trigger.data('dot-open');
  const triggerTextClose = trigger.data('dot-close');

  const dotContainers = card.find('[data-dot]');
  initDot(dotContainers);
  card.addClass(SHOW);
  
  let flug = true;
  trigger
    .text(triggerTextOpen)
    .on('click', e => {
      e.preventDefault();
      if (flug === true) {
        dotContainers.trigger('destroy');
        card.addClass(OPEN);
        trigger.text(triggerTextClose);
        flug = false;
      }
      else {
        initDot(dotContainers);
        card.removeClass(OPEN);
        trigger.text(triggerTextOpen);
        flug = true;
      }
    });
});
