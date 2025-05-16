export const orders = JSON.parse(localStorage.getItem('orders'))|| [];
export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
}
function saveToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}
// url parameter= let us save data directly in the url 