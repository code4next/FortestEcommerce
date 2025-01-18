class Product {
  id;
  title;
  price;
  discountPrice;
  rating;
  review;

  constructor(serial , title) {
    this.id = serial;
    this.title = title;
  }
}



const product1 = new Product(5 , 'T-shirt');
const product2 = new Product(3);
console.log(product1, product2);


class Cloth extends Product {

    size ;

    constructor (size){
        this.size = size;
    }

}

const cloth1 = new Cloth(5 , 't-shirt');


console.log(cloth1);