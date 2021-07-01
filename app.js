let name = "Venti";
let age = 16;
let boo = true;

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav_link");
const testBtn = document.querySelector('#testBtn');

console.log(navLinks);

function sayHello() {
    let message = "Hello " + name
    console.log(message);
}

sayHello();

function simpleMath(a, b) {
  let result = a + b;
  return result;
}

let sum = simpleMath(111, 121);

console.log(sum);

window.addEventListener("scroll", checkSroll);
document.addEventListener("DOMContentLoaded", checkSroll);

function checkSroll() {
  let scrollPos = window.pageYOffset;

  if(scrollPos > 0) {
    header.classList.add('color');
  } else {
    header.classList.remove('color');
  }
}


for(let navItem of navLinks) {
  navItem.addEventListener("click", function() {
    console.log(navItem.text);
  });
}
