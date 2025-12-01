// let a = 10;
// let b = 20;
// let c = 30;
let a = 10, b = 20, c = 30;

// Ternary Operator
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}
a > b ? console.log("a is greater than b") : console.log("b is greater than a");

// Default Value shorthand
let myName;
if(!myName) {
    myName = "Asif";
}

myName = myName || "Asif";

myName = myName ?? "Abir";

// Arrow Function shorthand
function sum1(x, y) {
    return x + y;
}

const sum2 = (x, y) => x + y;

// emplate Literal
let greeting1 = "Hello " + a + ", welcome to the world of JavaScript.";
let greeting2 = `Hello ${a}, welcome to the world of JavaScript.`;

// Object Property shorthand
const name = "Asif Abir";
const city = "Dhaka";

const person1 = {
    name: name,
    city: city
};

const person2 = {name, city};

// Logical AND / OR shorthand
if(a > 5) {
    console.log("a is greater than 5");
}

a > 5 && console.log("a is greater than 5");

// Destructuring shorthand
const myInfo = {
    myProfession : "Web Developer",
    myCity : "Dhaka"
}
// const myProfession = myInfo.myProfession;
// const myCity = myInfo.myCity;

// const {myProfession, myCity} = myInfo;
const {myProfession: myPro, myCity: mCity} = myInfo;
console.log(myPro, mCity);

const myFriends = ["Abir", "Kalam", "Jamal"];
// const friend1 = myFriends[0];
// const friend2 = myFriends[1];
// const friend3 = myFriends[2];   
const [friend1, friend2, friend3] = myFriends;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined1 = arr1.concat(arr2);
const combined2 = [...arr1, ...arr2];

// Short-circuit Evaluation
if(myInfo && myInfo.myProfession) {
    console.log("Profession exists");
}

// Optional Chaining
console.log(myInfo?.myProfession);