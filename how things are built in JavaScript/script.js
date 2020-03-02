/*
 execution context object

 creation phase
 
    a) creation of the variable object (VO)
    b) creation of the scope chain
    c) determine value of the 'this' variable

execution phase 

    a) the code of the function that generated the current execution
    context is ran line by line


creation of the variable object (VO)

    - the argument object is created, containing all the arguments that 
    were passed into the function
    -code is scanned for function declarations: for each function, a property
    is created in the variable object, pointing to the function
    -code is scanned for variable declarations, for each variable a property 
    is created in the variable object 
    -functions and variables are HOISTED
*/

// functions

calculateAge(1965);

function calculateAge(year) {
    console.log(2016-year);
}

calculateAge(1990);

// function is stored in the VO so we can use it before we call the function

// retirement(1965); hoisting functions only works for function declarations. this code wont work.

var retirement = function(year) {
    console.log(65 - (2016 - year));
};

retirement(1990);

// variables

console.log(age); //variables are put into the VO but are left undefined until declared. if we do not declare the variable at all this will result in a error in our code.
var age = 23;
console.log(age);

function foo() {
    var age = 64;
    console.log(age)
};

foo();
console.log(age);
// returns age withing the scope of the function. they are 2 variables in different scopes

/*
    -   scoping answers the question "where can we access a certain variable"
    -   each function creates a scope: the space/ environment, in which the variable it defines
    -   lexical scoping: a function that is lexically within another function gets access to the scope of the other function
*/

var a = 'hello ';
first();                                 // global scope (will never have access to the variables in sub scopes)

function first() {
    var b = 'hi ';                       // first() scope [VO1] + [VO global]
    second();
    
    function second() {
        var c = 'hey ';                  // second() scope [VO2] + [VO1] + [VO global]
        console.log(a + b + c);
    }
};

/*
the this variable 

    -   regular function call: the this keyword points at the global object, (the window object)
    -   method call: the this variable points to the object that is calling the method
    -   the this keyword is not assigned a value until a function where it is defined is actually called
*/

console.log(this);

ageCalculator(1985);

function ageCalculator(year) {
    console.log(2016 - year);
    console.log(this);
};

var eric = {
    name: 'eric',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
    }
}

eric.calculateAge();

var mike = {
    name: 'mike',
    yearOfBirth: 1984,
};

mike.calculateAge = eric.calculateAge;
mike.calculateAge();
