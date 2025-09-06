// capitalize
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// CamelCase
export const camelCase = str =>
  str
    .toLowerCase()
    .replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase());




// reverse string;
 const reverseString = (str) =>{
    let reverseStr ='';
    for(let i =str.length-1;i>=0;i--){
         reverseStr += str.charAt(i);
    }
    return reverseStr;
 }

export const reverseStr = (str)=>{
      return reverseString(str);
}
