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
class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.dev = songData.dev;
    }
}
const mySong = new Song({
    dev: "CFOUR",
    name: "Wachirayan Engchuan",
    publishDate: 2002
});

console.log(mySong);

// Try ...Carch SYNTAX
try {
    //code..
    throw "that is thrown every time";
} catch (err) {
    // error handling
    console.log("Have an Error");
    //alert(err); // err on webpage
    //alert(err.name); // err on webpage
    //alert(err.message); // err on webpage
    //alert(err.stack); // err on webpage
} finally {
    console.log("Code that always will run");
}

// ORIGINALLY USING CALLBACK
function callback() {
    console.log('Timeout completed');
}
setTimeout(callback, 100); // wait 3 seconds

// ASYNC / AWAIT

function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    console.log("Start");
    //await promiseTimeout(2000);
    const reponse = await longRunningOperation();
    console.log(reponse);
    console.log("Stop");
}
run();

function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("😎");
        }, 1000);
    });
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");
        }, 500);
    });
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadows");
        }, 500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`); // <--- after 2 second 1000 + 500 + 500 = 2000 = 2 s. 
}

console.log('We are looking for:');
msg();
console.log('Hello');

function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1);
        if (val == 0) {
            reject("Nope 😍");
        } else {
            resolve("Lucky!!");
        }
        //val ? resolve("Lucky!!") : reject("Nope 😍"); // same if else
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

// show result
for(let i = 0; i < arrLength; i++){
    msg();
}

// NPM PACKAGE
// <== npm install dotenv // create file package.json with package-lock.json