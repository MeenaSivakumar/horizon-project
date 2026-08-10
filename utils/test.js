//convert to uppercase
const names = ["john", "alice", "bob"];

const convertUpperCase = ()=>{
     names.map((name)=>(
        console.log(name.toUpperCase())
     ))
}
convertUpperCase()

//add 10 to each number
const nums = [5, 10, 15, 20];

const addNum = ()=>{
    nums.map((num)=>(
        console.log(num + 10)
    ))
}
addNum()

// extract employee names
const employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

const extractEmployeeNames = ()=>{
    employees.map((employee)=>(
        console.log(employee.name)
    ))
}

extractEmployeeNames()

// Convert prices into strings.

const prices = [100, 200, 300];

const convertNumIntoStrings = ()=>{
    prices.map((price)=>(
        console.log(price.toString())
    ))
}

convertNumIntoStrings()

// Return only ages.


const users = [
  { name: "John", age: 25 },
  { name: "Sam", age: 30 }
];

const returnAges = ()=>{
    users.map((user)=>{
       return (
        console.log(user.age)
       ) 
    })
}

returnAges()

// Return only even numbers.

const numbers = [1,2,3,4,5,6,7,8];

const returnEvenNumbers = ()=>{
   return  numbers.filter((num) =>  num % 2== 0)
}

console.log(returnEvenNumbers())



// Return employees with salary greater than 50000.
const employeesList = [
  {name:"John",salary:45000},
  {name:"Alice",salary:60000},
  {name:"Bob",salary:80000}
];

const returnSalary = employeesList.filter((employee) => employee.salary > 50000)
console.log(returnSalary)


// Filter strings longer than 5 characters.

const words = ["React","JavaScript","CSS","Node"];

const findCharacters = words.filter((word) => word.length > 5)
console.log(findCharacters);


// Filter active users.

const usersList = [
 {name:"A",active:true},
 {name:"B",active:false},
 {name:"C",active:true}
];

const activeUsers = usersList.filter((user) => user.active == true)
console.log(activeUsers)

// Return only positive numbers.


const numsList=[-2,-1,0,1,2,3];
const returnPositveNumbers = numsList.filter((num) => num >= 0)
console.log(returnPositveNumbers)

// Find sum.

const numbersList =[10,20,30,40];
const returnSum  = numbersList.reduce((acc,currentvalue)=>acc+currentvalue)
console.log(returnSum)

// Find product.

const values =[2,3,4];

const findProduct = values.reduce(( acc, curr ) => acc * curr)
console.log(findProduct)

// Count total employees.

const employeesNames=[
{name:"A"},
{name:"B"},
{name:"C"}
];

console.log(employeesNames.length)

// Find total salary.


const empList=[
{name:"A",salary:20000},
{name:"B",salary:30000},
{name:"C",salary:40000}
];

const totalSalary = empList.reduce((acc,curr)=>acc+curr.salary,0)
console.log(totalSalary)

// Find maximum number.

const list =[20,100,40,70];

const findMaximun = list.reduce((acc,curr) => acc < curr ? curr  : acc )
console.log(findMaximun)



// Find employee with id 2.

const emplist=[
{id:1,name:"John"},
{id:2,name:"Alice"},
{id:3,name:"Bob"}
];

console.log(emplist.find((emp) => emp.id == 2))


// Find first even number.

const numList =[1,3,6,8];
console.log(numList.find((num)=> num % 2 == 0))



// Find first salary greater than 50000.

const employees2 =[
{name:"A",salary:30000},
{name:"B",salary:70000},
{name:"C",salary:80000}
];

console.log(employees2.find((emp)=>emp.salary > 50000))

// Find first word with length greater than 4.

const wordsList=["cat","lion","elephant","dog"];
console.log(wordsList.find((word) => word.length > 4))


// Find first inactive user.

const usersData=[
{name:"A",active:true},
{name:"B",active:false}
];

console.log(usersData.find((user)=>user.active === false))

// Find index of 50.

const nums2=[10,20,30,40,50];
console.log(nums2.findIndex((num) => num==50))


// Find index of employee id 3.

const employees4=[
{id:1},
{id:2},
{id:3}
];
console.log(employees4.findIndex((emp) => emp.id == 3))

// Find index of first even number.

const nums3=[1,3,5,6,8];
console.log(nums3.findIndex((num)=>num%2==0))


// Find index of "React".

const tech=["HTML","CSS","React","Node"];
console.log(tech.findIndex((t)=>t==="React"))


// Find index of inactive user.

const users5 =[
{name:"A",active:true},
{name:"B",active:false}
];
console.log(users5.findIndex((user) => !user.active))


// Check if any number is negative.

const nums6 =[1,2,-3,4];
console.log(nums6.some((num)=>num<0))
