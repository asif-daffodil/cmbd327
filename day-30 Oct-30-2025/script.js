/*
const q1 = document.querySelector("#q1");
const ans1 = document.querySelector("#ans1");
const q2 = document.querySelector("#q2");
const ans2 = document.querySelector("#ans2");

q1.addEventListener("click", e => {
    e.target.classList.toggle("bg-black");
    e.target.classList.toggle("text-white");
    ans1.classList.toggle("hidden");
})

q2.addEventListener("click", e => {
    e.target.classList.toggle("bg-black");
    e.target.classList.toggle("text-white");
    ans2.classList.toggle("hidden");
})
*/

const aHead = document.querySelectorAll(".aHead");
const aHeadArr = Array.from(aHead);
aHeadArr.forEach(head => {
    head.addEventListener("click", e => {
        const ci = aHeadArr.indexOf(e.target);
        aHeadArr.forEach((h, i) => {
            if(ci == i){
                h.classList.toggle("bg-black");
                h.classList.toggle("text-white");
                h.nextElementSibling.classList.toggle("hidden")
            }else{
                h.classList.remove("bg-black");
                h.classList.remove("text-white");
                h.nextElementSibling.classList.add("hidden")
            }
        })
    })
})

const onBtn = document.querySelector("#onBtn");
const offBtn = document.querySelector("#offBtn");
const bulbImg = document.querySelector("#bulbImg");

offBtn.addEventListener("click", e => {
    bulbImg.src = "./images/pic_bulboff.gif";
})

onBtn.addEventListener("click", e => {
    bulbImg.src = "./images/pic_bulbon.gif";
})