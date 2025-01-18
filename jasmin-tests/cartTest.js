import { addTocart, cartItems } from "../data/cart.js";

describe('cart',()=>{
    it( 'add an existing product to the cart', ()=>{

    });
    it ('add a new product to the cart',() =>{
      addTocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cartItems.length).toEqual(1)
    });
});
console.log('am cart');