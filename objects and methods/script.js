
let john = {
    name: 'john',
    birthYear: 1990,
    calcAge: function () {
        return 2018 - this.birthYear;
    }
}

john.age = john.calcAge();

let mike = {
    birthYear: 1991,
    calcAge: function () {
        this.age = 2019 - this.birthYear;
    }
};

mike.calcAge();
console.log(mike);
console.log(john);