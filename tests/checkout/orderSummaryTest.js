import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage,cart  } from "../../data/cart.js";
import { loadProducts ,loadProductFetch} from "../../data/products.js";
let productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
describe('test suite: renderOrderSummary',()=>{
    beforeAll((done)=>{
        loadProductFetch().then(()=>{
            done();
        })
     


    })
    it('display the cart',()=>{
        document.querySelector('.js-test-containeer').innerHTML =`
        <div class="js-order-summary"></div>
        `
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',quantity:2,deliveryOptionId:'1'},{productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',quantity:1,deliveryOptionId:'2'}]);
        });
    
        loadFromStorage();
        renderOrderSummary();
        expect(
            document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
        

    })
    it('removes a product',()=>{
        spyOn(localStorage,'setItem')
        document.querySelector('.js-test-containeer').innerHTML =`
        <div class="js-order-summary"></div>
        <div class="js-payment-summary"></div>`
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',quantity:2,deliveryOptionId:'1'},{productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',quantity:1,deliveryOptionId:'2'}]);
        });
    
        loadFromStorage();
        renderOrderSummary();
        document.querySelector(`.js-delete-link-${productId1}`).click()
        expect(
            document.querySelectorAll('.js-cart-item-container').length
        ).toEqual(1);
      expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null)
      expect(
        document.querySelector(`.js-cart-item-container-${productId2}`)
      ).not.toEqual(null)
     expect(cart.length).toEqual(1);
     expect(cart[0].productId).toEqual(productId2)

    })
})