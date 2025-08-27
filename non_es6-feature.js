//var function scope

age = 20;
console.log(age)
var age;

//var value can be reassigned
var name = 'ggfg';
{
    var name = 'ggfd';
}
// the value in the block scope will be assigned to the variable because var allows to reassign the value.
console.log(name)


//named function
function displayMessage(){
    return "its the way of fun declaration before ES6"
}

console.log(displayMessage())

var sum = function calculateValue(a,b){
    var total = a+b;
   return total;
}

console.debug(sum(5,8));
// anonymous function
var displayName = function(name){
    return  'the user name is ' + name;
}
console.log(displayName('meena'))