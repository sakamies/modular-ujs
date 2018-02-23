function ClickConfirm () {
  document.addEventListener('click', function (event) {
    var message, element;

    element = event.target;

    if (element.matches('a[data-confirm], button[data-confirm], input[data-confirm]')) {
      message = element.getAttribute('data-confirm');
      if (!confirm(message)) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
      }

      return;
    }
  }, false);
}

export default ClickConfirm
