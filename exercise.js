// Array Destructring
const fruitsArr = ['apple','banana','cherry','kiwi','mango'];

const [fruitOne,fruitTwo]= fruitsArr;

console.log('two extracted fruits are', `${fruitOne} ${fruitTwo}`,);

// swap values
// before swap
console.log(fruitsArr);
[fruitsArr[2],fruitsArr[1]] = [fruitsArr[1],fruitsArr[2]];
// after swap
console.log(fruitsArr);

const numbers = [1,2,3,4,5,6];
console.log('numbers array',numbers);
const [a,b,...rest] =numbers;
const newArr = [a,b,...rest];
console.log('new array',newArr);

// extracting last element
const colors = ['red','yellow','orange','purple','green'];
const [,,,,lastColor]= colors;
console.log('last color is ',lastColor);

// nested array destructring
const nestedArr = [[1,2],[3,4]];
const [arrOne,arrTwo] = nestedArr;
console.log(arrOne,arrTwo);
const[numOne,numTwo] = arrOne;
console.log('the nested first array first value', numOne);
console.log('the nested first array second value', numTwo);
const[valueOne,valueTwo] = arrTwo;
console.log('the nested second array first value', valueOne);
console.log('the nested second array second value', valueTwo);

// object destructing
const obj = {name:'george',age:89,city:'paris'};
const{name,city} = obj;
console.log('name and city values are ', name +' '+ city);
// Rename Property
const obj2 = {firstName:'John',lastName:'doe'};
const{firstName:fNmae,lastName} = obj2;
console.log('first name is ',fNmae);

// defalut value
const obj3 = {userName:'ron',age:24};
const {userNameame,age,country='France'} = obj3
console.log(country);

// nested values
const userInfo = {user:{id:1,info:{email:'user@gmail.com'}}};
const {user:{info:{email}}} = userInfo; 
console.log(email);

// destructure obj inside array
const obj4 = [{id:1,city:'paris'}];
const [object] = obj4;
console.log(object);

// spread operatot
const arr1 = [1,2,3];
const arr2 = [...arr1];

// merge two arrays
const arr3 = [5,6,7,8];
const arr4 = [9,11,12,13];
const mergedArr = [...arr3,...arr4];
console.log(mergedArr);

// add a new element at the beginning
const arr5 = [5,6,7,8];
const arr6 = [1,2,3];
const arr7 = [...arr6,...arr5];
console.log(arr7);


// clone obj
const obj6 = {userName:'ron',age:24};
const obj7 = {...obj6};
console.log(obj7);

// merge two objects
const obj8 = {id:1,title:'project work'};
const obj9 = {author:'ron',year:1988};
const obj10 = {...obj8,...obj9};
console.log(obj10);

// override
const obj11 = {userName:'ron',age:20};


const addNumbers = (a,b,c)=>{
  return a+b+c;
}

const nums = [11,22,33,44,55];
console.log(addNumbers(...nums));

const[head,...tail] = nums;
console.log(head,tail);

const details = { id:1,fname:'rose',age:24,city:'paris'};
const{id,fname,...remObj} = details;
const obj13 = remObj;
console.log(id,fname);

