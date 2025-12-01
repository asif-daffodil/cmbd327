// Pass by Value
let a = 10;
function modifyValue(x) {
    x = x + 5;
    console.log('Inside modifyValue:', x); // 15
}
modifyValue(a);
console.log('Outside modifyValue:', a); // 10

// Pass by Reference
let obj = { value: 10 };
function modifyObject(o) {
    o.value = o.value + 5;
    console.log('Inside modifyObject:', o.value); // 15
}
modifyObject(obj);
console.log('Outside modifyObject:', obj.value); // 15