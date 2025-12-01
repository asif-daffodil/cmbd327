// Closure
function outerFunction(outerVariable) {
    function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
    return innerFunction;
}
const newFunction = outerFunction('outside');
newFunction('inside');

// Example of closure with a counter
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
