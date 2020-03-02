/*
object oriented programming

    -   objects interacting with one another through methods and properties

    -   used to store data, structure applications into modules and keeping code clean

previously we have not been able to replicate an object easily, in javascript we use prototypes
to complete this task

    -   every javascript object has a prototype property which makes inheritence possivle in javascript
    -   the prototype property of an object is where we put methods and poperties that we wanr other 
    objects to inherit
    -   the contructor prototype property is NOT the prototype of the contructoe itself, its the prototype of 
    ALL instances that are created through it
    -   when a certain method (or property) is called, the search starts in the object itself, and if it cannot
    be found, the search moes on to the objects prototype. this continues until the method is found : prototype chain 
*/

// function contructor

/*
let john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher',
};

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.lastName = 'smith';

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

/*
what new does:

    -   a brand new empty object is created
    -   function is called
    -   what the new does is to now address the .this from the previous function and address it to this new variable
    -   
*/

/*

let eric = new Person('eric', 1991, 'developer');
let jane = new Person('jane', 1969, 'designer');
let josh = new Person('josh', 1948, 'retired');

eric.calculateAge();
jane.calculateAge();
josh.calculateAge();

console.log(eric.lastName);
console.log(jane.lastName);
console.log(josh.lastName);

*/

//   OBJECT CREATE

/*
let personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
}

let john = Object.create(personProto);
john.name = 'john';
john.yeahOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

/*

//  PRIMITIVES VS OBJECTS

// primitives

let a = 23;
let b = a;

a = 46;

console.log(a);
console.log(b);


// objects

let obj1 = {
    name: 'john',
    age: 26,
}

let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);
console.log(obj2.age);

/*
whereas with the stored promative variables, when we changed the value on a after we declared b, the value of
b stayed the same. this does not hold true with objects as when we make one object equal to another we are actually calling the same object.
they are stored as the same object.
*/

/*

// functions

let age = 27;
let obj = {
    name: 'jonas',
    city: 'lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
};

change(age, obj);

console.log(age);
console.log(obj.city);

/*
the function will be able to change the values of the object in the global scope but 
the primitive variable will not be able to be changed in the global scope. we are not passing the 
object through the function, only the reference to it. so when we call the function we are actually
calling the object outside of the function
*/

//  PASSING FUNCTIONS AS ARGUMENTS

// let years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     for (i=0; i > arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };

// function calculateAge(el) {
//     return 2016 - el;
// };

// function isFullAge(el) {
//     return el >= 18;
// };

// function maxHeartRate(el) {
//     if (el > 18 && el < 81) {
//     return Math.round(206.9 - (0.67 * el));
//     } else {
//         return - 1;
//     }
// }

// let ages = arrayCalc(years, calculateAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let rates = arrayCalc(ages, maxHeartRate);

// console.log(fullAges);
// console.log(ages);
// console.log(rates);

// FUNCTIONS RETURNING OTHER FUNCTIONS

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ' can you please explain what ux design is?');
//         } 
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('what subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('hello ' + name + ', what do you do?');
//         }
//     }
// }

// let teacherQuestion = interviewQuestion('teacher');

// let designerQuestion = interviewQuestion('designer');

// teacherQuestion('john'); 
// designerQuestion('john');

// interviewQuestion('teacher')('mark');

//                          IIFE

// function game() {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// };

// game();

// (function (goodLuck) {
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// once inside parenthases javascrip will treat it as a declaration not an expression. this expression
// will make the function call itself

//                          CLOSURES

// function retirement(retirementAge) {
//     return function (yearOfBirth) {
//         let a = ' years left until retirement';
//         let age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a); // functions have access to to variables and parameters of its pouter function 
//     }
// }

// let retirementUS = retirement(66)(1990);

// please look back at closure lecture for more information

// let retirementGermany = retirement(66);
// let retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ' can you please explain what ux design is?');
//         } 
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('what subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('hello ' + name + ', what do you do?');
//         }
//     }
// }

// function interviewQuestion(job) {
//    return function(name) {
//        if (job === 'designer') {
//             console.log(name + ' can you please explain what ux design is?');
//        } else if (job === 'teacher') {
//             console.log('what subject do you teach, ' + name + '?');
//        } else {
//         console.log('hello ' + name + ', what do you do?');
//        }
//    }
// }

// let designInterview = interviewQuestion('designer');
// designInterview('kate');

//                      BIND, CALL AND APPLY

// let john = {
//     name: 'john',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('good ' + timeOfDay + ', ladies and geltleman, I\'m ' +
//             this.name + ' I\'m a ' + 
//             this.job + ' I\'m ' +
//             this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('wazzzzzzup ' + timeOfDay + ' is the best time to party, I\'m ' +
//             this.name + ' I\'m a ' + 
//             this.job + ' I\'m ' +
//             this.age + ' years old');
//         }
//     }
// }

// let emily = {
//     name: 'emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');

// let johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('afternoon');

// let emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for (i=0; i > arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calculateAge(el) {
    return 2016 - el;
};

function isFullAge(limit, el) {
    return el >= limit;
};

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(fullJapan);
console.log(ages)
 