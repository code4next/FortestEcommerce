const cart = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  updateLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  },
  addTocart(productId) {
    let matchItems;
    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchItems = item;
      }
    });

    if (matchItems) {
      matchItems.quantity++;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1,
      });
    }
  },
  removeFromCart(productId) {
    let newCart = [];

    this.cartItems.forEach((cartitem) => {
      if (cartitem.productId !== productId) {
        newCart.push(cartitem);
      }
    });

    this.cartItems = newCart;
    this.updateLocalStorage();
  },
};




