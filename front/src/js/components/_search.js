import {OPEN, BODY} from '../_constants';
const btnSearch = $('.js-search-btn');

btnSearch.on('click', function() {
  const this_ = $(this);
  const search = this_.parents('.js-search');
  const input = search.find('input[type="text"]');
	
  if (!search.hasClass(OPEN)) {
    search.addClass(OPEN);
    input.focus();
  }
  else {
    search.removeClass(OPEN);
    input.blur();
  }
});

BODY.on('click', e => {
  const search = $('.js-search');
  if ($(e.target).closest(search).length || !search.hasClass(OPEN)) return;
  search.removeClass(OPEN);
});
