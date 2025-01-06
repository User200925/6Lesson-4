const enterNumber = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const plyus = document.getElementById("plyusBtn");
const minus = document.getElementById("minusBtn");
const raqam = document.getElementById("number");
const rang = document.getElementById("bot");

let number = 0;

sendBtn.addEventListener("click" , () => {
    const inputValue = enterNumber.value;
    raqam.innerHTML = inputValue;
})