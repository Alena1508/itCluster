const checkInputValue = () => {
  const filled = 'is-filled';
  $('input, textarea').on('keyup', function() {
    var value = $(this).val();
    if (value) {
      $(this).addClass(filled);
    } else {
      $(this).removeClass(filled);
    }
  });
};
checkInputValue();
