//decalre variables using let and const

//const is an ES6 feature. Variables declared with const cannot be reassigned..
// const binds the variable name to a reference. For primitive types (string, number, boolean), you cannot reassign.
const age = 5;

{
    //you can declare a variable with the same name inside a block. It will only exist within that block
    const age =6;
}

//array and object declared using const values can be modified.

// Reassigning the entire array or object is not possible.
const nameList = ['xx','yyy','zzz'];
nameList = ['ttt','hrjr','wrieurie'];  // it will throw an error

const userInfo ={
    'name':'wwww',
    'age':22,
    'email':'dfbd@jdh.com',
}

userInfo = {
    'name':'grii',
    'age':20,
    'email':'dgfg@jdh.com',
} // it will throw an error

//this is possible
const  nameInfo = ['www','yyy','iiii'];
// nameInfo.push('uuuu');

const userDetails = {
    'name':'grii',
    'age':20,
    'email':'dgfg@jdh.com',
}

userDetails.age = 34;
// This works because const prevents reassignment of the variable reference, not the contents of the array or object.
console.log(nameInfo);
console.log(userDetails)


//let variable
//allow us to reassign the value.
let email = 'harry@gmail.com';
email = 'john@gmail.com';
console.log(email);

//but redeclaring the same let variable in the same scope is not possible.
// let email = 'djdhg'; //throw error at compile time
// let is block-scoped.
{
 let email = 'dgjrg@gmail.com';// this is possible because it can be accessed only inside this block
}

//Arrow function 
//No need to use the function keyword or return. If the body is one line, it can be written in one line.
// for multiple lines use {}. params is used inside the ().if one params is there then no need of ()
//Arrow functions do not have their own this; they inherit this from their surrounding scope.
displayMessage = message=>
      console.log(message);

displayMessage("This function displays an message");

addNum = (a,b)=> a+b;

console.log(addNum(19,89));

calculateValue = (a,b)=>{
    const total = a+b;
    const rem =  a-b;
    return `sum ${total} value ${rem}`;
    
}
console.log(calculateValue(78,67));

//default parameters
const calculateSum=(a=200,b=100)=>{
    if(a !=0 && b!=0){
        const total = a + b;
        return total;
    }
   return (a === 0 || b === 0) ? 0 : (a || b);

}
console.log(calculateSum());
console.log(calculateSum(24,60));
console.log(calculateSum(0,7))
