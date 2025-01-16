import { deliveryOptions } from "./deleveryOptions.js";

export let cartItems = JSON.parse(localStorage.getItem('cartItems')) || 
[
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity : 2,
    deliveryOptionId: '1'

  },
  {
    productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
    quantity : 5,
    deliveryOptionId: '2'

  },
  {
    productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
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
      deliveryOptionId: '1'
     
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


