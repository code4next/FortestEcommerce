import { cartItems, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { deliveryOptions } from "../data/deleveryOptions.js";
import { addDays } from "./utils/days.js";
import {formateCurency} from './utils/money.js';
let ordersummeryHTML = "";


cartItems.forEach((cartitem) => {
  const productId = cartitem.productId;

  let matchingItem;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingItem = product;
    }
  });

  ordersummeryHTML += `
          <div class="cart-item-container 
         delet-${matchingItem.id}">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingItem.name}
                </div>
                <div class="product-price">
                  $20.95
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartitem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link js-delete-link  link-primary" data-product-id = ${matchingItem.id}>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                
                  ${renderDeliveryOptionHTML(matchingItem)}
                 
        
                </div>
              </div>
            </div>
          </div>
    
    
    `;
});

const j = document.querySelector(".js-order-summery");

j.innerHTML = ordersummeryHTML;

const deleteLink = document.querySelectorAll(".js-delete-link");

deleteLink.forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    const container = document.querySelector(`.delet-${productId}`);
    container.remove();
    removeFromCart(productId);
  });
});



function renderDeliveryOptionHTML(matchingItem) {
  let deliveryOptionHTML = "";

  deliveryOptions.forEach((deliveryOption) => {
 const dateString = addDays(deliveryOption.deleveryDay);
 const priceString = deliveryOption.costCents === 0 ?  "Free" : formateCurency(deliveryOption.costCents ) ;
  
    deliveryOptionHTML += `
 <div class="delivery-option">
                  <input type="radio" ${ deliveryOptions.id === cartItems.id  ? "checked" :  ""  } class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString} 
                    </div>
                    <div class="delivery-option-price">

                      $ ${priceString} - Shiping


                    </div>
                  </div>
                </div>
    
    `;
  });
  return deliveryOptionHTML
}


console.log(deliveryOptions);
console.log(cartItems);
let i = undefined ;
for(let i = 0 ;i< 3 ; i ++) {
  i = i
  
}
cartItems.forEach((cartitme , i ) =>{

  console.log(cartitme.deliveryOption = deliveryOptions[i].id ); 
})