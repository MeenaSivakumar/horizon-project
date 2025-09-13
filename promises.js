const getNumber = ()=>{
   return new Promise((resolve,reject)=>{

    setTimeout(()=>{
      resolve(Math.random());
    },2000)
  
})
}

getNumber().then(val =>{
console.log(`random val ${val}`)
return val*val;
} ).then(val => console.log(`transformed val ${val}`));