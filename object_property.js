const studentObj = 
  { name: "john", marks: 97 ,age:16,city:'paris'}
console.log(studentObj)
const {name,city} = studentObj;
const studentInfo = {...studentObj};
console.log(name,city);
console.log(studentInfo)
studentInfo.marks = 45;

console.log(studentInfo)
console.log(studentObj)