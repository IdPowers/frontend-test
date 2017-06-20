import $ from 'jquery';
import 'tether';
import 'semantic-ui-sidebar/sidebar.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'blocks/light-select/light-select';
import CartModel from './CartModel';

const template = require('../cart-entry/cart-entry.hbs');
const plusIcon = require('assets/plus.png');
const lessIcon = require('assets/less.png');

const staticImages = {
  plusIcon,
  lessIcon,
};

const cart = new CartModel();
let $deletedEntry;

$('.header__cart').on('click', () => {
  $('.ui.sidebar').sidebar('toggle');
});

function renderSubtotal() {
  const subtotal = cart.getSubtotal();
  $('#resume-subtotal').text((subtotal + 20).toFixed(2));
}

function renderList() {
  const list = cart.getProducts();
  const $purchasesList = $('ul.cart-sidebar__items-list');
  let itemsTemplate = '';

  list.forEach((item) => {
    itemsTemplate += template({ staticImages, item });
  });

  $purchasesList.html(itemsTemplate);
  renderSubtotal();
}

function renderItemAmount($purchaseProduct, count) {
  const $currentAmount = $purchaseProduct.find('.cart-entry__amount');
  $currentAmount.text(count);
}

renderList();

$('.cart-sidebar__items-list').on('click', '.cart-entry__increase-btn', (e) => {
  const $increaseBtn = $(e.target);
  const $cartEntry = $increaseBtn.closest('.cart-entry');
  const count = cart.increaseCountOf($cartEntry.attr('id'));
  renderItemAmount($cartEntry, count);
  renderSubtotal();
});

$('.cart-sidebar__items-list').on('click', '.cart-entry__decrease-btn', (e) => {
  const $decreaseBtn = $(e.target);
  const $cartEntry = $decreaseBtn.closest('.cart-entry');
  const productId = $cartEntry.attr('id');
  const productAmount = cart.getCurrentProductAmount(productId);

  if (!(productAmount - 1)) {
    $deletedEntry = $cartEntry;
    $('#delete-dialog .modal-dialog').css({ top: $(window).scrollTop() });
    $('#delete-dialog').modal('show');
  }

  const count = cart.decreaseCountOf($cartEntry.attr('id'));
  renderItemAmount($cartEntry, count);
  renderSubtotal();
});

$('#confirm-delete').on('click', (e) => {
  e.stopPropagation();
  cart.removeProduct($deletedEntry.attr('id'));
  $('#delete-dialog').modal('hide');
  renderList();
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

  if ($('.checkbox input').is(':checkbox')) {
    $('.checkbox__indicator').addClass('checkbox__indicator_invalid');
  }
});

$('.checkbox input').on('change', () => {
  $('.checkbox__indicator').removeClass('checkbox__indicator_invalid');
});

$('.cart-sidebar__informations').on('change', 'input.light-input', (e) => {
  const $target = $(e.target);
  if ($target.hasClass('light-input_invalid')) {
    $target.removeClass('light-input_invalid');
  }
});
