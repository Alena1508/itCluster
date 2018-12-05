import searchableOptionList from '../lib/sol';
import { BODY, ACTIVE } from '../_constants';
import filtrify from '../lib/filtrify';

const input = '.js-filter .js-select input';
const trigger = $('.js-filter-apply');
const noSearch = $('.js-cards-no-search');

const writeLegend = ( query, match, mismatch ) => {
  (match.length === 0)
  	? noSearch.addClass(ACTIVE)
  	: noSearch.removeClass(ACTIVE);
};
const ft = $.filtrify('cards', null, {callback : writeLegend});
trigger.click(function() {
  const that = $(this);
  const select = that.parents('.js-filter').find('.js-select');
  const inputs = select.find('input[type="checkbox"]:checked');
  let valueArrow = [];
  for (let i = 0; i <= inputs.length - 1; i++) {
  	let val = $(inputs[i]).val();
  	valueArrow.push(val);
  }
  ft.trigger({ tag : valueArrow });
});


const select = $('.js-select');
select.searchableOptionList({
  maxHeight: '122px',
  showSelectAll: false,
  texts: {
    searchplaceholder: 'Enter or select tags'
  }
});

const hashVerification = () => {
  const hash = window.location.hash;
  if (!hash) return;
  const hashArray = hash.split('=');
  const hashVerifiable = hashArray[0];
  const filter = '#filter';
  const hashSecondArray = hashArray[1].split('+');
  if (filter === hashVerifiable) {
    console.log('hashVerification', hashSecondArray);
    ft.trigger({ tag : hashSecondArray });
  }
};
hashVerification();



// BODY.on('change', input, function() {
//   const that = $(this);
//   const filter = that.parents('.js-filter');
//   const select = filter.find('.js-select');
//   const inputs = select.find('input[type="checkbox"]:checked');
//   const btn = filter.find('.js-filter-apply');
//   (inputs.length >= 1)
//     ? btn.removeAttr('disabled')
//     : btn.attr('disabled', 'disabled');
// });
