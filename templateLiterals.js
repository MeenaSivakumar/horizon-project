const name = "Alice";
const age = 25;
console.log("My name is " + name + " and I am " + age + " years old.");

const city = "London";
const country = "UK";
const address = city + ", " + country;
console.log(address);

const first = "Hello";
const second = "World";
const message = first + " " + second + "!";
console.log(message);

const paragraph = "This is line one.\n" + 
                  "This is line two.\n" + 
                  "This is line three.";

const isMember = true;

// const msg = "Welcome " + (isMember ? "back" : "guest") + "!";

const a = 5;
const b = 10;
const result = "The sum of " + a + " and " + b + " is " + (a + b);

const html = "<ul>" +
               "<li>Apple</li>" +
               "<li>Banana</li>" +
             "</ul>";


// refactoring template literals
const userName = "Alice";
const userAge = 25;
console.log(`The name of the user is ${userName} and the user age is ${userAge}`);

const userCity = "London";
const userCountry = "UK";
console.log(`The user address: city: ${userCity}, 
    country: ${userCountry}`);

const firstWord = "Hello";
const secondWord = "World";
console.log(`the first word is ${firstWord} and second word is ${secondWord}`);

// multi line strings

const para = `This is line one 
This is line two 
This is line three.`
console.log(para);

const mesg =`welcome ${isMember ?  `back` :`guest`}`
console.log(mesg);
const res = `The sum of ${a} and ${b} is ${a+b}`;
console.log(res);

// const items = ["pen", "book", "pencil"];
// let list = "";
// for (let i = 0; i < items.length; i++) {
//   list += "Item: " + items[i] + "\n";
// }

// refactoring the above

const items = ["pen", "book", "pencil"];
let list = "";
for (let i = 0; i < items.length; i++) {
  list += `Item: ${items[i]}\n`;
}
console.log(list);

const htmlCode = `<ul> 
               <li>Apple</li>
            <li>Banana</li> 
             </ul>`
console.log(htmlCode);

// const user = "Meena";
// const taskCount = 5;
// const display = "Hello " + user + ", you have " + taskCount + " tasks pending.";

 const user = "Meena";
const taskCount = 5;
const displayMessage = `Hello ${user} , you have ${taskCount} tasks pending`;
console.log(displayMessage);

// const lang = "JavaScript";
// const version = "ES6";
// const info = "Learning " + lang + " with " + version + " features.";

const lang = "JavaScript";
const version = "ES6";
const info = `Learning ${lang} with ${version} features`;
console.log(info);

// const city = "paris";
// const country = "france";
// const msg = "I live in " + city + ", " + country;

function toUpper(string,...values){
    return string.reduce((result,str,i)=>result + str + (values[i] ? values[i].toUpperCase():''),'');
}
const cityName = "paris";
const countryName = "france";
const msg = toUpper`I live in ${cityName} , ${countryName}`;
console.log(msg);

// const item = "Phone";
// const price = 799.5;
// const bill = "Item: " + item + " | Price: $" + price;

function formatToCurrency(strings, ...values) {
  return strings.reduce((result, str, i) => {
    let value = values[i];
    if (typeof value === "number") {
      value = (value * 80).toFixed(2);
    }
    return result + str + (value !== undefined ? value : "");
  }, "");
}

const item = "Phone";
const price = 799.5;
const currency = formatToCurrency`Item: ${item} Price: ${price}`;
console.log(currency);

const length = 8;
const width = 4;
const area = `The area of rectangle is   ${length * width} square units.`;
console.log(area);

const scores = [10, 20, 30];
let value = "";
for (let i = 0; i < scores.length; i++) {
  value += `Score  ${i + 1} :   ${scores[i]}\n`;
}
console.log(value);