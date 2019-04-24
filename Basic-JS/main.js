'use strict'; 
// orderId = "200";
// console.log(orderId);

// var orderid = 9001;
// console.log(orderid);

// if use strict mode then undefined variable will get error
// or create global variable

// Variables

// number
var integer = 100;
var float = 1.24;
console.log(typeof float);

// boolean
var isActive = false;
console.log(typeof isActive);

// undefined
var shekcon;
console.log(typeof shekcon);

// object
var car = {
    name: 'hello',
    id: 73
}
var arr = [9001, 9002, 9003];
var order = null;
console.log(typeof car);
console.log(typeof arr);
console.log(typeof order);

// function
function cancel(order, id) {
    console.log(id);
    return order;
}
console.log(typeof cancel);


// how compile code js
// first pass will pick up any global variable or declaration
// second pass will begin execution

// when missing arg of function the arg will be undefined
cancel('hello');

// when function don't return will be undefined

function cancel2() {
}
var order = cancel2();

// for in

var obj = {
    title: 'hello',
    id: 100,
    isAlive: true
}
for (const field in obj) {
    console.log(field + ": " + obj[field]);
}


// hoisting

// pass 1
// all declarations are located and 
// identifiers are known by the compiler

// pass 2
// execution occurs in pass 2 coz all variables are known from pass 1
// they may be accessed before they're declared

console.log(hello); // undefined
var hello = 'hello';

demo(); // running
function demo(){
    console.log('running');
}

test(); // TypeError
var test = function(){
    console.log('running');
}                       
