/*
web storage is data stored locally in a users browser. there are two types
of web storage:

local storage - data with no expiration date that will persist after the 
window is closed

session storage - data that gets cleared after the browser window is closed

previously, cookies were the only option for remembering this type of local
temporary data. local storage has a significantly higher storage limit (5mb vs 4 kb)
and doesnt get sent with every HTTP request, so it can be a better option for 
client-side storage

heres a list of localStorage methods:

Method	            Description

setItem()	        Add key and value to local storage
getItem()	        Retrieve a value by the key
removeItem()	    Remove an item by key
clear()	            Clear all storage
*/

/*
before integrating local storage lets just get the form and list working - we
want anything we submit in the input to appear in the ul

first im just going to set up some variables for the elements on the page - the 
form, the unordered list, the button and the input text
*/

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

let itemsArray = []

localStorage.setItem('items' , JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

/*
next im going to make a function that creates an li element. since ill be making more
than one ill call it liMaker(). it just creates an li element, sets the text of 
the element to the parameter and appends the list item to the ul
*/

const liMaker = text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
};

/*
im goig to add an event listener to the form which watches for a submit event. which will be 
anytime you press enter on the form. e.preventDefault() will stop information from
being sent to the server

instead the form will submit the value of the input. were going to call the liMaker() 
function which will create the item with the text of the input value and append it 
to the DOM. Finally, we'll set the input value to an empty string so you dont have to 
erase the last item you entered manually
*/

form.addEventListener('submit' , function(e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items' , JSON.stringify(itemsArray))

    liMaker(input.value)
    input.value = ''
});

/*
every time the form is submitted the input value should be added to the localStorage as well as 
appear on the front end. We'll also want to loop through all the existing local storage items
and display them at the top of a list. Last we want 'Clear All' button to remove all items from local
storage.

lets create an empty array to start. and create a localStorage key called 'items'. now 
localStorage only supports strings as values, and want to store our to-dos in an array

we can get around this by using JSON.stringify() to convert a data array to a string. We'll use
JSON.parse() to convert the contents of the localStorage back into something we can work with later in 
the data variable
*/

/*
were going to loop through everything in our data variable above, which contains all the existing
localStorage data in a form JavaScript can understand and work with. and we'll run liMaker() again.
this will display all existing stored information on the front end everytime we open the app
*/

data.forEach(item => {
    liMaker(item)
});

/*
lastly we add a click event to clear all items from local storage
*/

button.addEventListener('click' , function() {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
});

/*
currently everytime we reload our local storage is empty. we need to write a conditional
statement to see if localStorage already exists
*/

let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}