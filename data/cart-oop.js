// function to generate the objects
//in object oriented programming we use PascalCase as a naming convention 
function Cart(localStorageKey){
    
    const  cart={
       
        cartItems:undefined,
      loadFromStorage(){

            this.cartItems=JSON.parse(localStorage.getItem(localStorageKey))
      
        if(!this.cartItems){
            // console.log('sonu')
        this.cartItems = [{productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',quantity:2,deliveryOptionId:'1'},{productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',quantity:1,deliveryOptionId:'2'}];
        }
        
        },
     saveToStorage(){
            localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
        },
    addToCart(productId){
     
    
        
            let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId===productId){
          matchingItem = cartItem;
                }
                
            })
            if(matchingItem){
                matchingItem.quantity+=1;
            }
            else{
                this.cartItems.push({
                    productId:productId,
                    quantity:1,
                    deliveryOptionId:'1'
                });
            }
            this.saveToStorage();
            
            
        
            
         
        
            
        },
        removeFromCart(productId){
            const newCart = [];
            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId!=productId){
                    newCart.push(cartItem)
                }
            })
        this.cartItems = newCart;
        this.saveToStorage();
        },
         updateDeiliveryOption(productId,deliveryOptionId){
            let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                if(productId==cartItem.productId){
                    matchingItem=cartItem;
                }
        
            });
           
            matchingItem.deliveryOptionId= deliveryOptionId;
            this.saveToStorage();
        }
    
    
    }
    return cart;
}



const cart = Cart('cart-oop');
const businessCart = Cart('business-cart-oop');


cart.loadFromStorage();
businessCart.loadFromStorage();

cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
console.log(cart);
console.log(businessCart);
// Q why do we use object oriented programming ?
// -> it tries to represent the real world therefore it is easy to understand  






//earlier we use the proedural way to write the code but now we use the object to write the code