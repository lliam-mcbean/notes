/*
arrays in JS consist of a list of elements. JS has many built in methods.

arrays are similar to strings, in that they both consist of a sequence of elements that can be accessed via index number
however it is important to know that strings are an immutable datatype, meaning they cannot be changed
arrays on the other hand are mutable, which means that many array methods will affect the original array, not a 
copy of the array

methods that modify the original array are known as mutator methods, and methods that return a new value are known as 
accessor methods

*/

// array methods are properly written at array.prototype.method() but we will be dropping the prefix for examples

// ----------------------------------ACCESSOR METHODS--------------------------

let monovalves = [`abalone`,`conch`];
let bivalves = [`oyster`,`mussel`,`clam`];

// concatenate the two arrays just adds the two data sets together
let shellfish = monovalves.concat(bivalves);

console.log(shellfish);

// -----------------------------------------------------------------------------

let fish = [`piranha`, `baracuda`, `koi`, `eel`];

// joins all the strings together seperated by a comma with no extra space
let fishString = fish.join();

console.log(fishString);

// -----------------------------------------------------------------------------

let dish = [`piranha`, `baracuda`, `koi`, `eel`];

// slice() copies a portion of an array to a new array. we use the index number of the item after the last one we want to mark
let fishWithShortNames = dish.slice(2,4);

console.log(fishWithShortNames);

// ------------------------------------------------------------------------------

let mish = [`piranha`, `baracuda`, `koi`, `eel`];

// tells you the first index number of the string you are identifying
console.log(mish.indexOf(`barracuda`));

// ------------------------------------------------------------------------------

// searches for the last indexed instances of the string or data
console.log(mish.lastIndexOf(`barracuda`));

//----------ITERATION METHODS----------------------------------------------------

mish.forEach(individualFish => {
    console.log(individualFish)
});

// ------------------------------------------------------------------------------

let printFish = mish.map(individualFish => {
    console.log(individualFish)
});
// the above does the same as the forEach() method but it returns the new array as in indipendant variable
// ------------------------------------------------------------------------------

let seaCreatures = [`shark`,`whale`,`cat`,`squid`,`starfish`];

let filteredList = seaCreatures.filter(creature => {
    return creature[0] === `s`
});

console.log(filteredList);
// the above code takes all the strings with the first letter s and puts them into a new variable
// --------------------------------------------------------------------------------

// let numbers = [4, 8, 15, 16, 23, 42];

// let sum = reduce((a,b) => {
//     return a+b
// });

// console.log(sum);
// please find a way to use the reduce() method. might require a function. cant figure it out right now
/*
the reduce() method will reduce the array into a single value. this is usually seen in numbers but can also
be used to join a string together
*/
// ----------------------------------------------------------------------------------

const isCephalopod = cephalopod => {
    return [`whale`, `squid`].includes(cephalopod)
};

console.log(seaCreatures.find(isCephalopod));

// searches the array for the values presented and re
// -----------------------------------------------------------------------------------

console.log(seaCreatures.findIndex(isCephalopod));
// returns the index of the first instace it finds in the array
// -----------------------------------------------------------------------------------



