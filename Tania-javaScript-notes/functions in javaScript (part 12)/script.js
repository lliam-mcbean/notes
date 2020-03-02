/*
function is a block of code that performs an action or returns a 
value. just like how arrays in JS have methods that perform tasks
functions can be thought of as custom global methods 
*/

function nameOfFunction () {
    // code executed
};

// funtion greet() {
//     console.log('hello world')
// };

// // invoke the function
// greet();

// ------------------FUNCTION PARAMETERS--------------

// initialize custom greeting function

function greet(name) {
    console.log('hello, ${name}')
};

/*
we havent defines the 'name' parameter anywhere else, so we are goig
to have to define it when we invoke our function
*/

// invoke the greet function with 'sammy' as the argument

greet('sammy');

/*
in addition to parameters variables can be declared inside a function.
these variables are local and can therefor be used multiple times outside
of the scope of the function
*/

function add(x,y) {
    return x + y
};

add(9,7);

const sum = function add(x,y) {
    return x + y
}

sum(20,5);
console.log(sum(20,5)); // console would only display if i console.log the function

// we can write our function into a variable by getting rid of a little of the the extra code

const addition = function(x,y) {
    return x + y
};

console.log(addition(100,3))

// the newest and simplest way to do this is with an ARROW FUNCTION

const multiply = (x,y) => {
    return x * y
};

console.log(multiply(30, 4));

/*
CONCLUSION

functions are blocks of code that return a value or perform an action. in this
article we covered function declarations and function expresions, returning values 
from functions, assigning function values to variables and ES6 arrow functions. 
functions are used to make programs scalable and modular. 

for more info on JavaScript functions:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/