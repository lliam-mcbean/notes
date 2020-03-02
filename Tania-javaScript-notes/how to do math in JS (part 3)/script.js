/*
Addition	        +	    x + y	    Sum of x and y
Subtraction	        -	    x - y	    Difference of x and y
Multiplication          *	    x * y	    Product of x and y
Division	        /	    x / y	    Quotient of x and y
Modulo	                %	    x % y	    Remainder of x / y
Exponentiation	        **	    x ** y	    x to the y power
Increment	        ++	    x++	x       plus one
Decrement	        --	    x--	x       minus one
*/

// Assign values to x and y
let x = 10
let y = 20

// Add x and y and assign the sum to z
let z = x + y

console.log(z)

// one thing to note is if we add a string to a number we get the following:

let x = 1 + '1'

console.log(x)
typeof x

/*
output:
        11
        'string'
*/

// instead of adding the 2 numbers JS will concatenate them together and output
// a string

// the rest is pretty logical. refer to https://www.taniarascia.com/how-to-do-math-in-javascript-with-operators/
// if you need any help. one thing to note is increments. they are useful for loops

