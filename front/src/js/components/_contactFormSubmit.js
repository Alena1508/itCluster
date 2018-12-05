const form = $('.js-form');

form.on('submit', function() {
  const thisForm = $(this);
  const url = 'https://dev.kyiv-itcluster.bbapps.io/contact-us/';
  const data = thisForm.serializeArray();
  $.ajax({
    type: 'POST',
    url: url,
    data: data,
    success: function(json) {
      thisForm.addClass('is-success');
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      thisForm.addClass('is-error');
      console.log(textStatus, errorThrown);
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  });
  return false;
});
