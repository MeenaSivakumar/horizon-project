import { isEmpty,mergeObj } from "../utils";


console.log(isEmpty({id:1}))

console.log(isEmpty({}))

const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "Paris", country:'france' };

console.log(mergeObj(obj1, obj2));
