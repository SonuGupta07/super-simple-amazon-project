// const cart=[];
// //export
// which variable we want to access outside of file
export const cart=[];
export function addToCart(button){
    const productId = button.dataset.productId;
    
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
            quantity:1
        });
    }
    
    

    
 

    
}