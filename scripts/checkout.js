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
//async make a function return a promise
//await is used inside async the closest function should be async
//handle error in async and await  
async function loadPage(){
    //  console.log('load page')
    // this converted to resolve value2 
    try{
        // throw 'error1'
     await loadProductFetch();
     const value = await new Promise((resolve,reject)=>{
        // throw 'error2'
                loadCart(()=>{
                //    reject('error3')
                    resolve('value3');//it get returned 
                })
            })
     //it wait here till the result comes
     renderOrderSummary();
     renderPaymentSummary();
     console.log(value)
        } catch(error){
console.log('error occured: please try again later')
        }
}
loadPage();
//this upper one is a shortcut of this 
// function loadPage(){
//     return new Promise((resolve)=>{
//         console.log('load page')
//         resolve();
//     })
// }
// Promise.all([
//     loadProductFetch(),
//     new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve('value2');
//         })
//     })
// ]).then((value)=>{
//     // console.log(value)
//     renderOrderSummary();
//     renderPaymentSummary();
// })


//here we use callback without a name 
//promise is the better way to handle asynchronous code 
//similar to done() function 
// let us wait for some code to finish before going to the next step 
// Qwhy do we use Promises rather than a callback? 
// -> multiple callback cause a lot of  nesting
// -> nesting means having code inside code
//async await is an shortcut of an promises it removes extra code 
//we can only use await, when we are inside an async function 