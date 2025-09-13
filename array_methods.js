const studentArr = [
  { name: "john", marks: 97 },
  { name: "harry", marks: 70 },
  { name: "shrey", marks: 98 },
  { name: "virat", marks: 100 },
  { name: "peter", marks: 65 },
];

const marksArr = studentArr.filter((student) => student.marks > 70);
console.log(marksArr);
const upperCase = studentArr.map((student) => student.name.toUpperCase());
console.log(upperCase);

const averageMarks = studentArr.reduce((acc, curr) => {
  let avg = acc + curr.marks / studentArr.length;
  return avg;
}, 0);
console.log(averageMarks);
