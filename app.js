//without return
var addition = (a,b) => a+b;
console.log(addition(5,1));
//with return
var addition = (a,b) =>{
    return a+b;
}
console.log(addition(9,8));
//Without Arrow function
var addition = function(a,b){
    return a+b;
}
console.log(addition(10,9))
// call back function
var timer = function(){
    console.log('Hello world')
}
setTimeout(timer,10000);
var button = document.getElementById('btn');
button.addEventListener("click",() => document.getElementById('ppp').innerHTML = 'Hi Sai Pavan');
//IIFE
(function (){
    console.log("Invoked Immediately");
})();
(foo = function(n=3){
    console.log("the number is "+ n);
})();