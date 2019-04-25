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

// string
var str = 'dawdaw';
console.log(typeof str);

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

function cancel2() {}
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
function demo() {
    console.log('running');
}

// test(); // TypeError
var test = function () {
    console.log('running');
}

// oct number or hex number
// var oct = 070; // 56
// var hex = 0x02; // 2

// use strict mode
// var oct = 070; // 70

// Number obj
Number.MAX_VALUE
Number.MIN_VALUE

// Infinity
var n = Number.MAX_VALUE * 2;
console.log(n); // Infinity

// Number
console.log(undefined / 5);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof - Infinity);
if (isNaN(undefined / 5))
    console.log('isNaN');

// String are immutable in JS
console.log(typeof "dawdawd");

var testStr = "  dawd ";
testStr.trim();
console.log(testStr);


// Boolean
console.log(typeof !!5);


// undefined and null
console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(undefined == null); // true
console.log(undefined === null); // false

// global scope
var productID = "PRD-200";

console.log(productID); // PRD-200
console.log(window.productID); // PRD-200
console.log(this === window); // true

var description = 'software';

function updatePD() {
    description = 'new software';
}

updatePD();
console.log('description:', description);

// function scope
var demoF = "hello";

function updateDemo() {
    var demoF = "world";
}

updateDemo();
console.log('demoF:', demoF);

// null = 0 when work with number
// undefined work with number => NaN
// null and undefined work with string => string
// work with addition then JS see Str then convert all to string
console.log("200" + 2); // 2002
console.log("200" + null + undefined); // 200nullundefined
console.log(2 + undefined); // NaN



// subtraction
console.log("200" - "1"); // 199
console.log("PR300" - "PR100"); // NaN
console.log("hello world", "200PR" - "100Hello");// NaN
console.log(300 - null); // 300
console.log(300 - undefined); // NaN


var obj = {
    valueOf: function () {
        return 100;
    }
};
var total = 300 - obj;
console.log('total:', total);


console.log(300 - NaN); // NaN


console.log(1.1 * 2.1);// 2.3100000000000005
console.log(false == 0); // true


