function add(a, b) {
  return a + b;
}
console.log(add(6,8));

function greet(name) {
  return "Hello, " + name + " welcome";
}
console.log(greet("meena"));

function square(num) {
  return num * num;
}
console.log(square(10));

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(89));

function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(8,7,6));

function sayHi() {
  console.log("Hi there!");
}

function getLength(str) {
  return str.length;
}
console.log(getLength('arrow function'));

function max(a, b) {
  if (a > b) return a;
  return b;
}
console.log(max(67,89));

function toUpper(str) {
  return str.toUpperCase();
}
console.log('upper');

function randomNumber() {
  return Math.random();
}
console.log(randomNumber());
const person = {
  name: "Charlie",
  delayedIntro: function () {
    setTimeout(function () {
      console.log("My name is " + this.name);
    }, 1000);
  }
};

(function () {
  console.log("I run immediately!");
})();

function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));