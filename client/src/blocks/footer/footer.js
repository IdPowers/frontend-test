import $ from 'jquery';

require('assets/icons/facebook.svg');
require('assets/icons/vk.svg');
require('assets/icons/ok.svg');
require('assets/icons/twitter.svg');
require('assets/icons/google-plus.svg');

const SocialShare = {

  vkontakte(purl, ptitle, pimg, text) {
    let url = 'http://vk.com/share.php?';
    url += `url=${encodeURIComponent(purl)}`;
    url += `&title=${encodeURIComponent(ptitle)}`;
    url += `&description=${encodeURIComponent(text)}`;
    url += `&image=${encodeURIComponent(pimg)}`;
    url += '&noparse=true';
    this.popup(url);
  },

  odnoklassniki(purl, text) {
    let url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1?';
    url += `&st.comments=${encodeURIComponent(text)}`;
    url += `&st._surl=${encodeURIComponent(purl)}`;
    this.popup(url);
  },

  facebook(purl, ptitle, pimg, text) {
    let url = 'http://www.facebook.com/sharer.php?';
    url += `u=${encodeURIComponent(purl)}`;
    url += `&p[title]=${encodeURIComponent(ptitle)}`;
    url += `&p[summary]=${encodeURIComponent(text)}`;
    url += `&p[images][0]=${encodeURIComponent(pimg)}`;
    this.popup(url);
  },

  twitter(purl, ptitle) {
    let url = 'http://twitter.com/share?';
    url += `text=${encodeURIComponent(ptitle)}`;
    url += `&url=${encodeURIComponent(purl)}`;
    url += `&counturl=${encodeURIComponent(purl)}`;
    this.popup(url);
  },

  gplus(purl, ptitle, pimg, text) {
    let url = 'https://plus.google.com/share?';
    url += `url=${encodeURIComponent(purl)}`;
    url += `&title=${encodeURIComponent(ptitle)}`;
    url += `&description=${encodeURIComponent(text)}`;
    url += `&imageurl=${encodeURIComponent(pimg)}`;
    this.popup(url);
  },

  popup(url) {
    window.open(url, 'social-share', 'top=200,left=300,width=600,height=400');
  },
};

$('.footer__share').on('click', '.footer__share-item', (e) => {
  const $target = $(e.target).closest('.footer__share-item');
  if ($target.hasClass('vkontakte')) {
    SocialShare.vkontakte('sneakers.local', 'sportwear', 'img_path', 'description');
  }

  if ($target.hasClass('odnoklassniki')) {
    SocialShare.odnoklassniki('sneakers.local', 'description');
  }

  if ($target.hasClass('facebook')) {
    SocialShare.facebook('sneakers.local', 'sportwear', 'img_path', 'description');
  }

  if ($target.hasClass('twitter')) {
    SocialShare.twitter('sneakers.local', 'sportwear');
  }

  if ($target.hasClass('gplus')) {
    SocialShare.gplus('sneakers.local', 'sportwear', 'img_path', 'description');
  }
});

