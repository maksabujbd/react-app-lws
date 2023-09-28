let number = 0;
let number1 = 0;
let button =  document.querySelector("#button");
let display = document.querySelector("#display");

let button1 =  document.querySelector("#button1");
let display1 = document.querySelector("#display1");


button.addEventListener("click", ()=>{
   number++;
   display.textContent = number.toString();
});

button1.addEventListener("click", ()=>{
   number1++;
   display1.textContent = number1.toString();
});