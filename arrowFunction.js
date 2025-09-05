const addNumbers = (a, b) => a + b;
console.log(addNumbers(5,10));

const greetMessage = (name) => "Hello, " + name + " welcome";
console.log(greetMessage("meena"));

const square = (num) => num * num;
console.log(square(10));

const isEven = (n) => n % 2 === 0;
console.log(isEven(89));

const multiply = (a, b, c) => a * b * c;
console.log(multiply(8,7,6));

const sayHi = () => console.log("Hi there!");


const getLength = (str) => str.length;
console.log(getLength('arrow function'));

const max = (a, b) => {
  if (a > b) return a;
  return b;
};
console.log(max(67,89));

const toUpper = (str) => str.toUpperCase();
console.log('upper');

const randomNumber = () => Math.random();
console.log(randomNumber());

const person = {
  name: "Charlie",
  delayedIntro: function () {
    setTimeout(() => {
      console.log("My name is " + this.name);
    }, 1000);
  }
};

 
(() => {
  console.log("I run immediately!");
})();

const  multiplyNumbers = (a, b = 2) => a * b;
console.log(multiplyNumbers(5));