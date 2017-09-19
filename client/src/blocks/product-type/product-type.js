/* eslint-disable */

window.plusQuantity = function(productName) {
  var productQuantityElement = document.querySelector('.' + productName + ' .product-type__quantity-value');
  productQuantityElement.innerHTML = parseInt(productQuantityElement.innerHTML) + 1;
  calculateSubtotal();
}

window.minusQuantity = function(productName) {
  var productNameElement = document.querySelector('.' + productName);
  var productQuantityElement = document.querySelector('.' + productName + ' .product-type__quantity-value');
  if (parseInt(productQuantityElement.innerHTML) - 1 > 0) {
    productQuantityElement.innerHTML = parseInt(productQuantityElement.innerHTML) - 1;
  } else {
    if (confirm("Remove the last product of this type?") == true) {
      productNameElement.remove();
    } 
  }
  calculateSubtotal();
}

calculateSubtotal = function() {
  var listOfProductElements = document.querySelectorAll('.your-cart-resume__product-list > *');
  var subtotalValueElement = document.querySelector('.your-cart-resume__subtotal-value');
  var subtotal = 0;
  listOfProductElements.forEach(function(currentValue, index, array) {
    var quantity = parseInt(currentValue.querySelector('.product-type__quantity > .product-type__quantity-value').innerHTML);
    var price = parseInt(currentValue.querySelector('.product-type__price-value').innerHTML);
    subtotal += quantity * price;
  })
  subtotalValueElement.innerHTML = subtotal.toFixed(2);   
} 
