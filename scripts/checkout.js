import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
// import '../data/cart-class.js'
import '../data/backened-practice.js';
import {loadProducts} from '../data/products.js'
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
//here we use callback without a name 