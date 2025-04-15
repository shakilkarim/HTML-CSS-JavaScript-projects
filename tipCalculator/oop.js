var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var CartItem = /** @class */ (function () {
    function CartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    CartItem.prototype.total = function () {
        return this.product.price * this.quantity;
    };
    return CartItem;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (product, quantity) {
        var item = new CartItem(product, quantity);
        this.items.push(item);
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.items.reduce(function (sum, item) { return sum + item.total(); }, 0);
    };
    ShoppingCart.prototype.showCart = function () {
        this.items.forEach(function (item) {
            console.log("".concat(item.product.name, " x").concat(item.quantity, " = ").concat(item.total(), "\u09F3"));
        });
        console.log("Total: ".concat(this.getTotal(), "\u09F3"));
    };
    return ShoppingCart;
}());
var p1 = new Product(1, "Laptop", 70000);
var p2 = new Product(2, "Mouse", 500);
var cart = new ShoppingCart();
cart.addItem(p1, 1);
cart.addItem(p2, 2);
console.log(cart.showCart());
