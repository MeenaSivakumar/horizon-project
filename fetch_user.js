const fetchData = async() => {
    try{
      const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json());
   const userData =  await fetch("https://jsonplaceholder.typicode.com/users/1").then((data) => data.json());

     return{data,userData};
    }catch(error){
        console.log("Error:",error)
    }
   
    
  
};

fetchData().then(data=>console.log(data))

// Invalid Call

const fetchInfo = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/user")
        if(!response.ok){
             throw new Error("Api failed")
        }
       const data = await response.json();
       return data;
    }catch(error){
        return "API failed, please try again";
    }
}

fetchInfo().then(data => console.log(data))
