import {cart,removeFromCart,updateDeiliveryOption} from '../../data/cart.js';
import { products,getProduct} from '../../data/products.js';
import{formatCurrency}from '../utils/money.js'

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import{deliveryOptions,getDeliveryOption} from '../../data/deliveryOption.js'
import { renderPaymentSummary } from './paymentSummary.js';
//here the default export is happen wheenver we have to only export one core functionalliy then we use the default export 
//while the upper one is name export form multiple export from file we use the name export
//note all libraries has not esm version hence for some library we have to use script tag but dayjs has esm version so the upper one syntax we are able to use it

export function renderOrderSummary(){
let cartSummaryHTMl='';


cart.forEach((cartItem)=>{
    const productId=cartItem.productId;
    const  matchingProduct = getProduct(productId);
  const deliveryOptionId= cartItem.deliveryOptionId;
  const  deliveryOption =getDeliveryOption(deliveryOptionId);
  const today= dayjs();
    const deliveryDate= today.add(
      deliveryOption.deliveryDays,'days'


    );
 
    const dateString= deliveryDate.format('dddd, MMMM D');
   

  

    const html=
    `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
               ${matchingProduct.name}
                </div>
                <div class="product-price">
                 $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                
                
                 ${deliveryOptionHTML(matchingProduct,cartItem)}
              </div>
            </div>
          </div>

    `
  cartSummaryHTMl+=html;
})

document.querySelector('.js-order-summary').innerHTML=cartSummaryHTMl;
document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
 const productId = link.dataset.productId;
 removeFromCart(productId);
 const container =document.querySelector(`.js-cart-item-container-${productId}`)

 container.remove();
 renderPaymentSummary();

    })
})
function deliveryOptionHTML(matchingProduct,cartItem){
  let html=''
  deliveryOptions.forEach((deliveryOption)=>{
    const today= dayjs();
    const deliveryDate= today.add(
      deliveryOption.deliveryDays,'days'


    );
 
    const dateString= deliveryDate.format('dddd, MMMM D');

    
    const priceString = (deliveryOption.priceCents===0) ?'FREE':`${formatCurrency(deliveryOption.priceCents)} -`
    const isChecked = deliveryOption.id===cartItem.deliveryOptionId;
    html+=
    `
        <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
                      <input type="radio" 
                      ${isChecked?'checked':''}
                      class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                      <div>
                        <div class="delivery-option-date">
                      ${dateString}
                        </div>
                        <div class="delivery-option-price">
                          ${priceString} Shipping
                        </div>
           </div>
           </div>
    `

  })
  return html;

}

//why we use external libaries
// ->let us share code
// ->save time
// ->avoid duplicating work
//esm version 
// esm=ecmaScript Module (EcmaScript = javaScript)
// it is another name of javascript which works with the javascript module
document.querySelectorAll('.js-delivery-option').forEach((element)=>{
element.addEventListener('click',()=>{
  const {productId,deliveryOptionId} = element.dataset;
 updateDeiliveryOption(productId, deliveryOptionId)
 renderOrderSummary();
 renderPaymentSummary();
})
})
}
// a function can call/re-run  itself is called recursion

//what is mvc 
// mvc-> means model view controller
// in this archictecture we update the data and regenerate all the html
// 1.Model this part of code saves and manages the data
// 2.view takes the data and display on the pages// here we generate the html and displays on the page
// 3.Controller-> runs some code when we interact with the page
// basically here the cycle is Model-> view ->Controller->Model



