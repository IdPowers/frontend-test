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

  getCurrentProductAmount(productId) {
    const idx = this.products.findIndex((elem) => {
      return elem.id === productId;
    });

    return this.products[idx].amount;
  }

  increaseCountOf(productId) {
    const idx = this.products.findIndex((elem) => {
      return elem.id === productId;
    });
    if (idx !== -1) {
      this.products[idx].amount += 1;
    }

    return this.products[idx].amount;
  }

  decreaseCountOf(productId) {
    const idx = this.products.findIndex((elem) => {
      return elem.id === productId;
    });
    if (idx !== -1 && this.products[idx].amount > 1) {
      this.products[idx].amount -= 1;
    }

    return this.products[idx].amount;
  }

  removeProduct(productId) {
    this.products = this.products.filter((item) => {
      return item.id !== productId;
    });
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
