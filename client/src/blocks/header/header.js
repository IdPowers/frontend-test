/* eslint-disable */
require('assets/icons/search.svg');
require('assets/icons/cart.svg');
require('assets/icons/user.svg');

window.onCartClicked = function() {
  const currentValue = document.getElementsByClassName('cart')[0].style.display;
  if (currentValue === 'none') {
    document.getElementsByClassName('cart')[0].style.display = 'block';
    document.getElementsByClassName('header__left')[0].style.width = 'auto';
    document.getElementsByClassName('header__right')[0].style.width = 'auto';
  }else{
    document.getElementsByClassName('cart')[0].style.display = 'none';
    document.getElementsByClassName('header__left')[0].style.width = '880px';
    document.getElementsByClassName('header__right')[0].style.width = '360px';
  }
}
