import { deliveryOptions } from "./deleveryOptions.js";

export let cartItems = JSON.parse(localStorage.getItem('cartItems')) || 
[
  {
    productId: undefined,
    quantity : 2,
    deliveryOptionId: '1'

  },
  {
    productId: undefined,
    quantity : 5,
    deliveryOptionId: '2'

  },
  {
    productId: undefined,
    quantity : 6,
    deliveryOptionId: '3'

  },
  
];

export function updateLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function addTocart(productId){
  let matchItems;
  cartItems.forEach((item) => {
    if (productId === item.productId) {
      matchItems = item;
    }
  });

  if (matchItems) {
    matchItems.quantity++;
  } else {
    cartItems.push({
      productId,
      quantity: 1,
     
    });
  }
}


export function removeFromCart(productId){
  let newCart = []

   cartItems.forEach((cartitem)=>{
     if(cartitem.productId !== productId){
      newCart.push(cartitem)
     }
   })

   cartItems = newCart;
   updateLocalStorage()
}


