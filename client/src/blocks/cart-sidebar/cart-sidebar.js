import $ from 'jquery';
import 'tether';
import 'semantic-ui-sidebar/sidebar.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'blocks/light-select/light-select';

let $deletingEntry;

$('.header__cart').on('click', () => {
  $('.ui.sidebar').sidebar('toggle');
});

$('.cart-sidebar__items-list').on('click', '.cart-entry__increase-btn', (e) => {
  const $increaseBtn = $(e.target);
  const $cartEntry = $increaseBtn.closest('.cart-entry');
  const $currentAmount = $cartEntry.find('.cart-entry__amount');

  $currentAmount.text(parseInt($currentAmount.text(), 10) + 1);
});

$('.cart-sidebar__items-list').on('click', '.cart-entry__decrease-btn', (e) => {
  const $decreaseBtn = $(e.target);
  const $cartEntry = $decreaseBtn.closest('.cart-entry');
  const $currentAmount = $cartEntry.find('.cart-entry__amount');
  const productAmount = parseInt($currentAmount.text(), 10);

  if (productAmount - 1) {
    $currentAmount.text(productAmount - 1);
  } else {
    $deletingEntry = $cartEntry;
    $('#delete-dialog .modal-dialog').css({ top: $(window).scrollTop() });
    $('#delete-dialog').modal('show');
  }
});

$('#confirm-delete').on('click', (e) => {
  e.stopPropagation();
  $deletingEntry.remove();
  $('#delete-dialog').modal('hide');
});

$('#close-delete').on('click', (e) => {
  e.stopPropagation();
  $('#delete-dialog').modal('hide');
});

// Confirm cart validation
$('#cart-confirm').on('click', () => {
  $('input.light-input').filter('[required]').each((idx, elem) => {
    if (!$(elem).val()) {
      $(elem).addClass('light-input_invalid');
    }
  });

  if ($('.control--checkbox input').is(':checkbox')) {
    $('.control--checkbox .control__indicator').addClass('control__indicator_invalid');
  }
});

$('.control--checkbox input').on('change', () => {
  $('.control--checkbox .control__indicator').removeClass('control__indicator_invalid');
});

$('.cart-sidebar__informations').on('change', 'input.light-input', (e) => {
  const $target = $(e.target);
  if ($target.hasClass('light-input_invalid')) {
    $target.removeClass('light-input_invalid');
  }
});
