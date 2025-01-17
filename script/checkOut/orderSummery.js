import {
  cartItems,
  removeFromCart,
  updateDeliveryOption,
} from "../../data/cart.js";

import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deleveryOptions.js";
import { addDays } from "../utils/days.js";
import { formateCurency } from "../utils/money.js";
import { getDeliveryOptions } from "../../data/deleveryOptions.js";
import { paymentSummery } from "./paymentSummery.js";

export function renderOrderSummery() {
  let ordersummeryHTML = "";

  cartItems.forEach((cartitem) => {
    const productId = cartitem.productId;

    let matchingItem;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingItem = product;
      }
    });

    const deleveryOptionId = cartitem.deliveryOptionId;

    const deliveryOption = getDeliveryOptions(deleveryOptionId);

    const dateString = addDays(deliveryOption.deleveryDay);

    ordersummeryHTML += `
              <div class="cart-item-container 
             delet-${matchingItem.id}">
                <div class="delivery-date">
                  Delivery date: ${dateString}
                </div>
    
                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src="${matchingItem.image}">
    
                  <div class="cart-item-details">
                    <div class="product-name">
                     ${matchingItem.name}
                    </div>
                    <div class="product-price">

                      $${formateCurency(matchingItem.priceCents)}
                    </div>
                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label">${
                          cartitem.quantity
                        }</span>
                      </span>
                      <span class="update-quantity-link link-primary">
                        Update
                      </span>
                      <span class="delete-quantity-link js-delete-link  link-primary" data-product-id = ${
                        matchingItem.id
                      }>
                        Delete
                      </span>
                    </div>
                  </div>
    
                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    
                      ${renderDeliveryOptionHTML(matchingItem, cartitem)}
                     
            
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
      paymentSummery()
    });
  });

  function renderDeliveryOptionHTML(matchingItem, cartitem) {
    let deliveryOptionHTML = "";

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = addDays(deliveryOption.deleveryDay);
      const priceString =
        deliveryOption.costCents === 0
          ? "FREE"
          : formateCurency(deliveryOption.costCents) + " -";

      const isChecked = deliveryOption.id === cartitem.deliveryOptionId;

      deliveryOptionHTML += `
     <div class="delivery-option js-delivery-option" data-product-id = "${
       matchingItem.id
     }" data-deliveryOption-id = "${deliveryOption.id}">
                      <input type="radio" ${
                        isChecked ? "checked" : ""
                      } class="delivery-option-input"
                        name="delivery-option-${matchingItem.id}">
                      <div>
                        <div class="delivery-option-date">
                          ${dateString} 
                        </div>
                        <div class="delivery-option-price">
    
                          $ ${priceString}  Shiping
    
    
                        </div>
                      </div>
                    </div>
        
        `;
    });
    return deliveryOptionHTML;
  }
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryoptionId } = element.dataset;
      //! think about how to track otpitons
      //? think about how to track otpiton
      //! think about how to track otpitons
      console.log(productId, deliveryoptionId);
      updateDeliveryOption(productId, deliveryoptionId);
      renderOrderSummery();
      paymentSummery()
    });
  });
}
