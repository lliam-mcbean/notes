const paragraph = document.createElement('p');
const scotland = document.createElement('p');

// the paragraph variable outputs an empty p element. we can add text to this by using the 
// textContent property

paragraph.textContent = "im a brand new paragraph";

// innerHTML lets you add HTML as well as text to an element

scotland.innerHTML = "im a paragraph with <strong>bold</strong> text"

// it is also possible to create a text node with the createTextNode() method

const text = document.createTextNode("im a text node");

// in order to see the elements we have created we must first append them to the DOM. the 
// following methods are used to append content to your file:

// 
// node.appendChild()           Add a node as the last child of a parent
// node.insertBefore()          insert a node into the parent element before specified sibling node
// node.replaceChild()          Replace an existing node with a new node

const todoList = document.querySelector('ul');
const newTodo = document.createElement('li');

newTodo.textContent = 'Do homework';

todoList.appendChild(newTodo);

// we use our query selector to make a new variable that selects the ul element. 
// we then use createElement() to make another variable that will hold its own list item
// we then use .textContent to add the text to our new li variable
// and finally use appendChild() to add our content to the ul

const anotherTodo = document.createElement('li');
anotherTodo.textContent = 'pay bills';

todoList.insertBefore(anotherTodo, todoList.firstElementChild);

// inserts your element at the begining of the list
// insertBefore() takes to arguments, your element you wish to put in and the node you want to put it before

const modifiedTodo = document.createElement('li');
modifiedTodo.textContent = 'Feed the dog';

todoList.replaceChild(modifiedTodo, todoList.children[2]);

// replaces a specific node in the list identified by the .children[] property

// a node can be removed with the following methods:
// 
// node.removeChild()       Remove child node
// node.remove()            Remove node

todoList.removeChild(todoList.lastElementChild);

todoList.children[1].remove();
