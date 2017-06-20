import $ from 'jquery';

require('assets/icons/facebook.svg');
require('assets/icons/vk.svg');
require('assets/icons/ok.svg');
require('assets/icons/twitter.svg');
require('assets/icons/google-plus.svg');

$('.footer__share').on('click', '.footer__share-item', (e) => {
  const link = $(e.target).closest('.footer__share-item').data('link');
  window.open(link, 'social-share', 'top=200,left=300,width=600,height=400');
});
