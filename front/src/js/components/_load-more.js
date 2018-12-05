const ajaxurl = $('.load-more__btn').data('url');
let page = 2;
$('body').on('click', '.load-more__btn', function() {
  const data = {
    'action': 'load_posts_by_ajax',
    'page': page,
    'security': $('.load-more__btn').data('security')
  };

  $.post(ajaxurl, data, function(response) {
    console.log('response', response);
    $('.post-list').append(response);
    page++;
  });
});
