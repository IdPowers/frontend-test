const nike = require('assets/nike-in-cart.png');

export default class CartModel {

  constructor() {
    this.products = [
      {
        id: 'sneakers-1',
        amount: 1,
        image: nike,
        brand: 'NIKE',
        name: 'Air Max Tavas SD',
        size: '7.5',
        price: 160,
      },
      {
        id: 'sneakers-2',
        amount: 2,
        image: nike,
        brand: 'NIKE2',
        name: 'Air Max Tavas SDg',
        size: '7.5',
        price: 190,
      },
    ];
  }

  getProducts() {
    return this.products;
  }

  add(newProduct) {
    this.products.push(newProduct);
  }

  getProduct(productId) {
    const idx = this.products.findIndex((elem) => {
      return elem.id === productId;
    });

    return idx !== -1 ? this.products[idx] : null;
  }

  getCurrentProductAmount(productId) {
    const product = this.getProduct(productId);
    return product ? product.amount : 0;
  }

  increaseCountOf(productId) {
    const product = this.getProduct(productId);
    if (product) {
      product.amount += 1;
    }

    return product.amount;
  }

  decreaseCountOf(productId) {
    const product = this.getProduct(productId);
    if (product && product.amount > 1) {
      product.amount -= 1;
    }

    return product.amount;
  }

  removeProduct(productId) {
    let i = 0;
    while (i < this.products.length) {
      if (this.products[i].id === productId) this.products.splice(i, 1);
      else i += 1;
    }
  }

  getSubtotal() {
    const prices = this.products.map((item) => {
      return item.price * item.amount;
    });
    const subtotal = prices.reduce((sum, current) => {
      return sum + current;
    }, 0);

    return subtotal;
  }
}
