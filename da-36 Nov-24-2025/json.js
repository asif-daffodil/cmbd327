const myInfo = {
    name: "Asif",
    age: 22,
    city: "Dhaka"
};

console.log(myInfo);

const myInfoJSON = JSON.stringify(myInfo);

console.log(myInfoJSON);

const myInfoObj = JSON.parse(myInfoJSON);

console.log(myInfoObj);