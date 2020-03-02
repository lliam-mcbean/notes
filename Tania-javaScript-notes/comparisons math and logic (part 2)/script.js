/*
comparison operators are used to determine equality or differences between values

a single equal sign applies a value to a variable

==          equal
===         strict equal
!=          not equal
!==         strict not equal
<           less than
>           greater than
<=          less than or equal to
>=          greater than or equal to

comparison operators return true or false result

 */

var x = 5 // assigning the number 5 to x.
x == 5 // true: 5 is equal to 5.
x == '5' // true: "5" is equal to 5 in value, but not in type ("5" is a string, not a number).
x === 5 // true.
x === '5' // false: "5" is not equal in both type and value to 5.
x != 6 // true: 6 is not equal to 5.
x !== 6 // true: 6 is not equal to 5.
x != '5' // false: "5" is equal in value, but not type, to 5.
x !== '5' // true: "5" is not equal in value and type to 5.
x < 6 // true: 5 is less than 6.
x > 4 // true: 5 is greater than 4.
x <= 4 // true: 5 is less than or equal to 5
x >= 4 // false: 4 is neither greater than nor equal to 5.

/*
arithmetic operators perform mathematical calculations and return a value

+           addition
-           subtraction
*           multiplication
/           division
%           remainder
++          increment
--          decrement
 */

var x = 5 // assigning the number 5 to x.
x + 5 // returns 10.
x - 5 // returns 0.
x / 5 // returns 1.
x * 5 // returns 25.
x % 3 // returns 2.
++x // returns 6.
--x // returns 4.

/*
conditional statements execute an action based on whether specified conditions are
true or false

&&          and
||          or
!           not

*/

/*
there are 3 keywords you can use in an if else statement.
else, if, and else if.
*/

if (condition) {
    // do something (do not end this code bloc with a semi colon)
} else {
    // do something else
}

var doorIsLocked = true

if (doorIsLocked) {
    console.log('door is locked')
} else {
    console.log('epstein didnt kill himself')
}

// -------------------------------------------------------------------------------------------

var doorIsLocked = true // the door is locked.
var hasKey = true // you have the key.

if (doorIsLocked && hasKey) {
  // the door is locked, and you have the key
  console.log('You unlocked the door! You open the door.')
} else if (doorIsLocked && !hasKey) {
  // the door is locked, and you don't have the key (!hasKey is the same as hasKey === false)
  console.log('The door is locked.')
} else {
  console.log('The door is not locked. You open the door.')
}

/*
conditional statements dont just evaluate true or false you can use any
conditional operators to evaluate the expression
*/

var money = 1000 // you have 1000 in your inventory
var swordCost = 1200 // the sword costs 1200

if (money < swordCost) {
  console.log("You don't have enough money to buy this sword!")
} else {
  console.log('You buy the sword!')
}

/* 
a switch statement can be made similarly to an else if statement with many blocks.
it just comes out cleaner and easier to read 
*/

var season = 'Autumn'

switch (season) {
  case 'Winter':
    console.log('Go sledding!')
    break
  case 'Autumn':
    console.log('Drink a pumpkin spice latte!')
    break
  case 'Spring':
    console.log('Fly a kite!')
    break
  case 'Summer':
    console.log('Go to the beach!')
    break
  default:
    console.log('Study JavaScript.')
    break
}
