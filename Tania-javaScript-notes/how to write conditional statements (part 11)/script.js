/*
conditional statements execute a specific function based on the results of an 
outcome of true or false

a few examples of JS conditional statements you might see are:

    check the location of a user and display the correct language based on country
    send a form on submit or display warnings next to missing required fields
    open a dropdown on a click event, or close a dropdown if its already open
    display an alcohol purveyors website if the user is over the legal drinking age
    display the booking form for a hotel but not if the hotel is booked
*/

/*
the most fundamental of the conditional statements is the if statement. it will evaluate 
whether a statement is true or false. if the statement returns true the conditional statement
will be ignored
*/

//if (condition) {
    // code that will execute if condition is true
//};

/*
AND         &&          returns true if both operands are true
OR          ||          returns true if either operand is true
NOT         !           returns true if operand is false
*/

const highQuality = true;
const lowPrice = true;

highQuality && lowPrice; // returns true

highQuality || lowPrice; // returns true

!highQuality // returns false

//set balance and price of item
const balance = 500;
const jeans = 40;

// check is there is enough funds to purchase item
if (jeans <= balance) {
    console.log('you have enough money for this item')
};

// if the is statement returns false and is not executed the code block will be ignored

// if (condition) {
//     // code that will execute if the condition is true
// } else {
//     //code that will execute if condition is false
// };

/*
else statements return an option if the statement returns false
*/

const phone = 600;

if (phone <= balance) {
    console.log('you have enough')
} else {
    console.log('back to the grind')
};

/**
 else if statements can have multiple conditions
 */

// if (condition a) {
//     //code that will run if condition a is true
// } else if (condition b) {
//     //code that will run if condition b is true
// } else {
//     //code that will run if condition is false
// };

let grade = 45;

if (grade >= 90) {
    console.log('A')
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 60) {
    console.log('D')
} else {
    window.location.href = 'https://www.mcdonalds.com/ca/en-ca/careers.html'
};



