import { cartItems } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOptions } from "../../data/deleveryOptions.js";
import { formateCurency } from "../utils/money.js";

export function paymentSummery() {
  let productPriceCents = 0;
  let shipingCostCents = 0;
  cartItems.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += cartItem.quantity * product.priceCents;
    const deliveryOption = getDeliveryOptions(cartItem.deliveryOptionId);
    shipingCostCents += deliveryOption.costCents;
  });

  const totalCostBeforTax = productPriceCents + shipingCostCents;
  const taxCents = totalCostBeforTax * 0.1;
  const totalCostCents = totalCostBeforTax + taxCents;

  const paymentSummeryHtml = `
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formateCurency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formateCurency(shipingCostCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formateCurency(totalCostBeforTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formateCurency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formateCurency(totalCostCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
          `;
document.querySelector(".js-payment-dummery")
.innerHTML = paymentSummeryHtml;     
}

