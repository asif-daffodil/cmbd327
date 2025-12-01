const heading1 = document.getElementById("heading1");
heading1.innerHTML = "<b>This message is provided by js</b>";

const myClass = document.getElementsByClassName("myClass")[0];
myClass.textContent = "This is my class.";

const p = document.getElementsByTagName("p")[0];
p.innerText = "This is a paragraph";


const myId = document.querySelector("#myId");
myId.innerHTML = "This is my div.";

const myOtherClass = document.querySelector(".myOtherClass");
myOtherClass.textContent = "This is my other div";

const myOtherClass2 = document.querySelectorAll(".myOtherClass")[1];
myOtherClass2.textContent = "ha ha ha ha ha";


