// Q what is backened? 
// -> another computer that manages the data of a website
//type of http message 
// 1.get = get some information from the backened
// 2.Post
// 3.put
// 4.delete
// 5.patch
// Q what is url?
// ->Url= Uniform Resource Locator
// ->Like an address , but for the internet
// ->Helps us locate another computer on the internet
const xhr = new XMLHttpRequest();
xhr.addEventListener('load',()=>{
    console.log(xhr.response);
})
//first we have to add the event listner then we have to send the request 
xhr.open('Get','https://supersimplebackend.dev');
xhr.send();
// url paths
// https://supersimplebackend.dev./hello->/hello 
// https://supersimplebackend.dev./products/frist-> /products/first
// https://supersimplebackend.dev-> / 
// Each url path wiil give us a different response 
//a backened only suppor a certain set of url paths
//status code 
// start with  4 and 5 (400,404, 500) => failed 
// starts with 4 means our problem 
// starts with 5 means backened problem 
//starts with 2 means response is succeded (200,201,204)
// what is api? 
// api-> application programming interface
// how we interact with something 
//the backened can respond different type of data 
// text , json,html ,image 
// Note: typing a url on browser actually a same thing the get request hence 
// Using the browser = making a Get request
