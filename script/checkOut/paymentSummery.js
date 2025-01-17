import { cartItems } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOptions } from "../../data/deleveryOptions.js";

export function paymentSummery() {
  let productPriceCents = 0;
  let shipingCostCents = 0;
  cartItems.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += cartItem.quantity * product.priceCents;
    const deliveryOption = getDeliveryOptions(cartItem.deliveryOptionId);
    shipingCostCents += deliveryOption.costCents;
    
  });

const  totalCostBeforTax = productPriceCents + shipingCostCents;
const taxCents = totalCostBeforTax * 0.1;
const totalCostCents = totalCostBeforTax + taxCents



}
