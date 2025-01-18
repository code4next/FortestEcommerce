import { cartItems, updateLocalStorage, addTocart} from '../data/cart.js';
import { products  } from '../data/products.js';
import { formateCurency  } from '../script/utils/money.js';
 


const productGrids = document.querySelector(".products-grid");
let productDetails = [];

products.forEach((product) => {
  // Render product HTML
  productGrids.innerHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}">
          </div>
          <div class="product-name limit-text-to-2-lines">${product.name}</div>
          <div class="product-rating-container">
            <img class="product-rating-stars" src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>
          <div class="product-price">${product.getPrice()}</div>
          <div class="product-quantity-container">
            <select class="product-quantity-container-value">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="product-spacer"></div>
          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>
          <button data-product-id="${
            product.id
          }" class="add-to-cart-button button-primary">Add to Cart</button>
        </div>`;

  // Store product id and default quantity (1)
  productDetails.push(product);
});




const addToCartButton = document.querySelectorAll(".add-to-cart-button");



addToCartButton.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addTocart(productId)
    updateLocalStorage();
    updateCart();

  

  });
});

function updateCart(){
  let totalItems = 0;
  cartItems.forEach((item) =>{
   totalItems += item.quantity
  })

  const cartItemsDisply = document.querySelector('.js-cart-quantity');
  cartItemsDisply.textContent = `${totalItems}`
}
updateCart()


