for (let i = 0; i < 100; i++) {
    if(i == 5) {
        continue;
    }else if ( i == 10) {
        break;
    }
    console.log(i);
}

// Array - Access | Modify | Check Array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Access elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// Modify elements
fruits[1] = 'Blueberry';
console.log(fruits); // ['Apple', 'Blueberry', 'Cherry']

// Check Array
console.log(Array.isArray(fruits)); // true
console.log(fruits.length); // 3
console.log(fruits.indexOf('Cherry')); // 2

// Traverse Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Reverse Array
fruits.reverse();
console.log(fruits); // ['Cherry', 'Blueberry', 'Apple']

// Sort Array
fruits.sort();
console.log(fruits); // ['Apple', 'Blueberry', 'Cherry']

// Copy Array
let moreFruits = ['Date', 'Elderberry'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry']

// 2D Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][1]); // 5

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Strings vs Array
let str = "Hello, World!";
console.log(str[0]); // H
console.log(str.length); // 13
console.log(str.indexOf('World')); // 7

// String Methods:
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.slice(0, 5)); // "Hello"
console.log(str.replace('World', 'there')); // "Hello, there!"
console.log(str.includes('Hello')); // true
console.log(str.trim()); // "Hello, World!"
console.log(str.charAt(7)); // W
console.log(str.split(', ')); // ["Hello", "World!"]
console.log(str.split(', ').reverse().join(', ')); // "World!, Hello"

// Objects
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Access properties
console.log(person.name); // John
console.log(person['age']); // 30

// Modify properties
person.age = 31;
console.log(person.age); // 31

// Delete property
delete person.city;
console.log(person.city); // undefined

// Add property
person.country = 'USA';
console.log(person.country); // USA

// Traverse Object
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Conditional Return
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));

// Math
console.log(Math.abs(-5)); // 5
console.log(Math.max(1, 3, 2, 5)); // 5
console.log(Math.min(1, 3, 2, -5)); // -5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.random()); // Random number between 0 and 1

// Date Object
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })); // e.g., "15 Jun 2024"
console.log(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })); // e.g., "03:45:30 PM"

// Swap Variable
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);

// Function Inside Function || Nested Function
function outerFunction(x) {
    function innerFunction(y) {
        return y * 2;
    }
    return innerFunction(x) + 3;
}

console.log(outerFunction(5)); // 13

// Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120
const xyz = "hi";
// Error Handling
try {
    xyz = "hello";
} catch (error) {
    console.error("Error occurred: " + error.message);
}