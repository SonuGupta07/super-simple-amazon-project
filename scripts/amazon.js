import{cart,addToCart} from '../data/cart.js';
import{products} from '../data/products.js'
import { formatCurrency } from './utils/money.js';
//you can also do the same
// import {cart as myCart} from '../data/cart.js'
//.means current folder .. means one level up folder here javascript-amazon-project-main
//put all import at the top of the file 
// to use module we have to use live server
//benefits of module 
//1heps us avoid naming conflict
//we have to not worry about the order of load of module like earlier one in which script cart first should be load but here no such case

let productsHTML = '';

products.forEach((product)=>{
    const html=`
      <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select>
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

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
        `
    productsHTML+=html;
    
})
function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;


    })
    document.querySelector('.js-cart-quantity').innerHTML= cartQuantity;

}

document.querySelector('.js-products-grid').innerHTML= productsHTML;
//the data attribute in html is custome attribute that let you store extra information on Html elements - which can you later access easily with javascript here the name started with data and write in kebab case when we use it converted into camel case
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        // console.log(button.dataset);//it is an object
        // console.log(button.dataset.productName)
        const productId = button.dataset.productId;
        console.log(productId)
        addToCart(productId);
        updateCartQuantity();
        
        
    });
});



