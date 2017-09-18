/* eslint-disable */
// eslint-disable-next-line import/no-extraneous-dependencies
require('./index.styl');
require('blocks/header/header');
require('blocks/footer/footer');


window.validateForm = function() {
  var firstNameElement = document.getElementsByClassName('first-name')[0];
  var secondNameElement = document.getElementsByClassName('second-name')[0];
  var addressElement = document.getElementsByClassName('address')[0];
  var postalCodeElement = document.getElementsByClassName('postal-code')[0];
  var cityElement = document.getElementsByClassName('city')[0];
  var emailElement = document.getElementsByClassName('email')[0];
  var phoneElement = document.getElementsByClassName('phone')[0];
  var termsElement = document.getElementsByClassName('your-cart-resume__your-cart-resume-checkbox-gap')[0];
  var termsElementInput = document.getElementsByClassName('checkbox__checkbox-input')[0];

  var wrongColor = 'rgb(255, 127, 127)';
  var rightColor = 'rgb(161, 231, 51)';

  if (firstNameElement.value.trim().length == 0) {
    firstNameElement.style['border-bottom-color'] = wrongColor;
  } else if (firstNameElement.style['border-bottom-color'] === wrongColor) {
    firstNameElement.style['border-bottom-color'] = rightColor;    
  }

  if (secondNameElement.value.trim().length == 0) {
    secondNameElement.style['border-bottom-color'] = wrongColor;
  } else if (secondNameElement.style['border-bottom-color'] === wrongColor) {
    secondNameElement.style['border-bottom-color'] = rightColor;    
  }

  if (addressElement.value.trim().length == 0) {
    addressElement.style['border-bottom-color'] = wrongColor;
  } else if (addressElement.style['border-bottom-color'] === wrongColor) {
    addressElement.style['border-bottom-color'] = rightColor;    
  }

  if (postalCodeElement.value.trim().length == 0) {
    postalCodeElement.style['border-bottom-color'] = wrongColor;
  } else if (postalCodeElement.style['border-bottom-color'] === wrongColor) {
    postalCodeElement.style['border-bottom-color'] = rightColor;    
  }

  if (cityElement.value.trim().length == 0) {
    cityElement.style['border-bottom-color'] = wrongColor;
  } else if (cityElement.style['border-bottom-color'] === wrongColor) {
    cityElement.style['border-bottom-color'] = rightColor;    
  }

  if (emailElement.value.trim().length == 0 || emailElement.value.indexOf('@') == -1) {
    emailElement.style['border-bottom-color'] = wrongColor;
  } else if (emailElement.style['border-bottom-color'] === wrongColor) {
    emailElement.style['border-bottom-color'] = rightColor;    
  }

  if (phoneElement.value.trim().length == 0) {
    phoneElement.style['border-bottom-color'] = wrongColor;
  } else if (phoneElement.style['border-bottom-color'] === wrongColor) {
    phoneElement.style['border-bottom-color'] = rightColor;    
  }

  if (termsElementInput.checked == false) {
    termsElement.style['border-bottom'] = '1px solid ' + wrongColor;
  } else if (termsElement.style['border-bottom'] === '1px solid ' + wrongColor) {
    termsElement.style['border-bottom'] = '1px solid ' + rightColor;    
  }
}
