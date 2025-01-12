export let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

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


