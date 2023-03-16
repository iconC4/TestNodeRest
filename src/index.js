let arrLength = 10;
let arr1 = Array(arrLength);

for (let i = 0; i < arr1.length; i++)
    console.log("Start ", i + 1);

// Concat Joins two arrays to make a new array
let arrCon = [1, 2, 3, 4, 5];
let arrCat = [6, 7, 8, 9, 10];
let newArrConCat = arrCon.concat(arrCat);
console.log(newArrConCat);

// Object
const user = {
    name: "CFOUR",
    yearOfBirth: 2002,
    calculateAge: function () {
        return this.yearOfBirth - 2023;
    }
}
// edited Object
user.yearOfBirth = 2000;
console.log(user.calculateAge());

// Object Cloning
const obj1 = {
    person: 'Wachirayan',
    weight: 65
}