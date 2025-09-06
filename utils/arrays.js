export const removeDuplicates = (arr)=>{
    const uniqueArr = arr.filter((value,index,arr)=> arr.indexOf(value) === index );
    return uniqueArr;
}

// using set removing duplicates

export const uniqueArr = (arr)=>{
  const uniqueSet =  new Set(arr);
  return [...uniqueSet];
}



// groupBy 

export const groupBy = (arr,key)=>{
 return arr.reduce((res,item)=>{
        const group = item[key];
        res[group] = res[group] || [];
        res[group].push(item);
        return res;
    },{}
)

}


