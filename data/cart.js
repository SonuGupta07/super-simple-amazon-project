// const cart=[];
// //export



// which variable we want to access outside of file
export let cart;

export function loadFromStorage(){
    cart=JSON.parse(localStorage.getItem('cart'))
if(!cart){
cart = [{productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',quantity:2,deliveryOptionId:'1'},{productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',quantity:1,deliveryOptionId:'2'}];
}

}
loadFromStorage();
export function addToCart(productId){
 

    
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(cartItem.productId===productId){
  matchingItem = cartItem;
        }
        
    })
    if(matchingItem){
        matchingItem.quantity+=1;
    }
    else{
        cart.push({
            productId:productId,
            quantity:1,
            deliveryOptionId:'1'
        });
    }
    saveToStorage();
    
    

    
 

    
}
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!=productId){
            newCart.push(cartItem)
        }
    })
cart = newCart;
saveToStorage();
}
export function updateDeiliveryOption(productId,deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId==cartItem.productId){
            matchingItem=cartItem;
        }

    });
   
    matchingItem.deliveryOptionId= deliveryOptionId;
    saveToStorage();
}
export function loadCart(fun){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
      console.log(xhr.response)
    
      //here we provide a function as a prameter which is know as call back - afunction to run in the future
      // means a call back is a function which is run in a future 
      //fun is an callback 
      fun()
    })
    xhr.open('GET','https://supersimplebackend.dev/cart');
    xhr.send();
  }