// accessing elements by ID

const demoId = document.getElementById('demo');

demoId.style.border = '1px solid purple';

// accessing elements by Class

const demoClass = document.getElementsByClassName('demo');

// for this class we have our items sorted in an array under 'demo'.
// to access both the items in the array we write a for loop to return
// the border style as '1px solid orange' for both elements in the array

for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '1px solid orange';
}

// accessing elements by Tag

const demoTag = document.getElementsByTagName('article');

for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '1px solid blue';
}

// accessing elements by Query
// dont have the patience to write doen the differences here. please refer to 
// online notes https://www.taniarascia.com/how-to-access-elements-in-the-dom/

const demoQueryAll = document.querySelectorAll('.demo-query-all');

demoQueryAll.forEach(query => {
    query.style.border = '1px solid green';
});