class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class CartItem {
  constructor(public product: Product, public quantity: number) {}

  total() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  private items: CartItem[] = [];

  addItem(product: Product, quantity: number) {
    const item = new CartItem(product, quantity);
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.total(), 0);
  }

  showCart() {
    this.items.forEach((item) => {
      console.log(`${item.product.name} x${item.quantity} = ${item.total()}৳`);
    });
    console.log(`Total: ${this.getTotal()}৳`);
  }
}

const p1 = new Product(1, "Laptop", 70000);
const p2 = new Product(2, "Mouse", 500);

const cart = new ShoppingCart();
cart.addItem(p1, 1);
cart.addItem(p2, 2);
cart.showCart();
