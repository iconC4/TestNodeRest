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
    weight: 60
}

const obj2 = { ...obj1 };
obj2.weight = 65;
console.log(obj1);
console.log(obj2);

// ITERATOR
for (let char of "cfour")
    console.log(char);

// CLASS
class Myclass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    calculate() {
        console.log('calculate your Age');
    }
}

const myClass = new Myclass('CFOUR', 21);
myClass.calculate();
console.log(myClass.age);

//CLASS EXTENDS
class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}
class Song extends Media{
    constructor(songData){
        super(songData);
        this.dev = songData.dev;
    }
}
const mySong = new Song({
    dev : "CFOUR",
    name : "Wachirayan Engchuan",
    publishDate: 2002
});

console.log(mySong);

// Try ...Carch SYNTAX
try{
    //code..
    throw"that is thrown every time";
}catch(err){
    // error handling
    console.log("Have an Error");
    //alert(err); // err on webpage
    //alert(err.name); // err on webpage
    //alert(err.message); // err on webpage
    //alert(err.stack); // err on webpage
}finally{
    console.log("Code that always will run");
}

// ORIGINALLY USING CALLBACK
function callback(){
    console.log('Timeout completed');
}
setTimeout(callback, 3000); // wait 3 seconds