import { removeDuplicates,uniqueArr,groupBy } from "../utils";

let arr = [1,2,3,4,5,2,7,6,9,6,9,1,4];
console.log(`array values before removing duplicates ${arr}`);
console.log(`array values after removing duplicates ${removeDuplicates(arr)}`);

console.log(uniqueArr([1,2,3,3,4,5,5,6,2,6,7,7,8]));

const userArr = [{id:1,role:'admin',name:'alice'},{id:2,role:'user',name:'bob'},{id:3,role:'admin',name:'john'},{id:4,role:'admin',name:'harry'}];
console.log(groupBy(userArr,'role'));