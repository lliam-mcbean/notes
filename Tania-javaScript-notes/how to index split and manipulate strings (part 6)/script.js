/*
there are two types of strings in JS. string primatives and string objects
 */

 // Initializing a new string primitive
const stringPrimitive = 'A new string.'

// Initializing a new String object
const stringObject = new String('A new string.')


/*
each character in a string is indexed as so:

H	o	w		a	r	e		y	o	u	?
0	1	2	3	4	5	6	7	8	9	10	11

much like an array the first character is marked with 0

note that the white space characters also have an index
*/

'how are you'[5]; // using square bracket notation you can access any character in a string

'how are you'.charAt(5); // we can also use the charAt() method to return a character

`how are you`.indexOf(`o`); // this returns the index number for the character we have chosen. since there is 2 instances it will only return the first instance

`how are you`.lastIndexOf(`o`); // this will return the las index number of the character in the string

`how are you`.lastIndexOf(`are`); // you can use these methods to return the index of the first character of a set of multiple characters

`how are you`.slice(8,11); // returns the characters of and between the ones declares

`how are you`.slice(8); // returns the character declared along with every character remaining in the string
            
`how are you`.length; // returns the number of characters in a string

`how are you`.toUpperCase(); // returns the string with all upper case characters

`HoW aRe YoU`.toLowerCase(); // returns the string with all lower case characters

const originalString = `how are you`;

const splitString = originalString.split(` `);

console.log(splitString); // returns the string as an array of strings seperated by the white space in the original string

splitString[1]; // the strings are now stored in this variabe a an array

const tooMuchWhitespace = '     How are you?     '

const trimmed = tooMuchWhitespace.trim()

console.log(trimmed); // takes out the white space from both ends of the string, but not in between characters

const originalString = 'How are you?'

// Replace the first instance of "How" with "Where"
const newString = originalString.replace('How', 'Where')

console.log(newString); // we can search a string fr a value and replace it with a new value using the replace() method

const originalString = "Javascript is a programming language. I'm learning javascript."

// Search string for "javascript" and replace with "JavaScript"
const newString = originalString.replace(/javascript/gi, 'JavaScript')

console.log(newString); // this does the same thing except it replaces ALL instances of the characters within the string
