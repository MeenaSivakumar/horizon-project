//check objcr has no keys

export const isEmpty = (obj)=>{
    return Object.keys(obj).length === 0;
}

// merge two objects

export const mergeObj = (obj1,obj2)=>{
    if(obj1 !== null && obj2 !== null){
      return  {...obj1,...obj2};
    }
    return null;
  
}
