function Cart(localStorageKey) {
  const cart = {
    cartItems: JSON.parse(localStorage.getItem(localStorageKey)) || [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
        quantity: 5,
        deliveryOptionId: "2",
      },
      {
        productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity: 6,
        deliveryOptionId: "3",
      },
    ],

    updateLocalStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
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
          deliveryOptionId: "2",
        });
      }
      this.updateLocalStorage();
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

    updateDeliveryOption(productId, deliveryOption) {
      let matchItems;
      cartItems.forEach((item) => {
        if (productId === item.productId) {
          matchItems = item;
        }
      });

      matchItems.deliveryOptionId = deliveryOption;
      updateLocalStorage();
    },
  };

  return cart;
}

