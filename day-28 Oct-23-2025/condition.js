/**
 * Conditional operators
 * ==
 * ===
 * !=
 * !==
 * >
 * <
 * >=
 * <=
 */

if (5 === "5") {
    console.log("Condition is true");
} else if (5 == "5") {
    console.log("2nd else if Condition is true");
} else if (5 !== "5") {
    console.log("3rd else if Condition is true");
} else {
    console.log("Condition is false");
}

const city = "Gazipur";

switch (city) {
    case "Kuakata":
        console.log("Your city is Kuakata");
        break;

    case "Rangamati":
        console.log("Your city is Rangamati");
        break;
    
    case "Dhaka":
        console.log("Your city is Dhaka");
        break;
    
        default:
            console.log("We don\'t know your city");
}

// Loops
let n = 0;
while (n < 10) {
    console.log(n);
    n++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let m = 30;
do {
    console.log(m);
    m++;
}while (m < 10);

const studentList = ["Abul", "Baabul", "Kabul", "Bulbul"];
for(let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}

studentList.forEach((v, i) => console.log(`${i} = ${v}`));

const j = "Ami"
console.log(j + " vaat khai");
console.log(`${j} vaat khai`);
