import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js'
// import '../data/backened-practice.js';
import {loadProducts,loadProductFetch} from '../data/products.js'
import { loadCart } from '../data/cart.js';
// it runs the innner function immediately
/*
new Promise((resolve)=>{
  
    loadProducts(()=>{

       
        resolve();
        
    })
    
    
}).then(()=>{
    console.log('monu')
    renderOrderSummary();
    renderPaymentSummary();
})
    */

// here the code become more and more nested theis is issue with call back hence we used the promises 
// loadProducts(()=>{
//     loadCart(()=>{
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
  
    
    
// })
//same code in promise way 
// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');
//     })
// }).then((value)=>{
//     console.log(value)
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         })
//     })
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })
//hence promises help keep our code flat not make it nesty 
//we can run multiple promise at the same time 
Promise.all([
    loadProductFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve('value2');
        })
    })
]).then((value)=>{
    console.log(value)
    renderOrderSummary();
    renderPaymentSummary();
})


//here we use callback without a name 
//promise is the better way to handle asynchronous code 
//similar to done() function 
// let us wait for some code to finish before going to the next step 
// Qwhy do we use Promises rather than a callback? 
// -> multiple callback cause a lot of  nesting
// -> nesting means having code inside code
