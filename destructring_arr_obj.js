// destructring
// The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

let arr = [1,2,3,4,5];
[a,b] = arr;
console.log('the first two values ',a,b);
[num1,...rest] = arr;
console.log('the rest of the values are ',...rest);

[num1,,,num5] = arr;
console.log('the first and last value is stored in the num1 is ', `${num1}`, 'and num5 is ', `${num5}` );

[num1,,num3,...rest]=arr;
console.log('num1 is ',num1,'num3 is',num3,'rest of the values are ',rest);


const obj = {name:'ggg',age:89,email:'dfdf@gmail.com'};
const {name,email} = obj;
console.log(name,email);

// defalut value
const userObj =  {username:'ggg',email:'dfdf@gmail.com'};
const {username,city='chennai'} = userObj;
console.log(city);

// spread operator
const userInfo = {name: "John",
  email: "Doe@hgh.com",
}
const obj2 = {firstName: "Joy",
  lastName: "De",
}
const details = {...userInfo,...obj2};
console.log(details);
const obj3 = {...details};
console.log(obj3);

const obj5 = { foo: "bar", x: 42 };
const obj4 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj5, ...obj4, y: 9 }; 

let arr1 = [1,2,3];
const arr2 = [4,5,7];

const mergedArr = [...arr1,...arr2];
console.log(mergedArr);

const arr3 = [...mergedArr];
arr3.push(8);
console.log(arr3);
console.log(mergedArr);

