// debounce

export const debounce = (fun,delay)=>{
    let timer;
    
    return (...args)=>{
      clearTimeout(timer);
      timer= setTimeout(()=>{fun(...args)},delay)
    }
}



// throttle
export const throttle = (fn,delay)=>{
    let timeFlag = null;

    return(...args)=>{
        if(timeFlag === null){
            fn(...args);
            timeFlag = setTimeout(()=>{timeFlag = null},delay);
        }
    }
}

const fetchData = ()=>{
    console.log("fetching data.....");

   return setTimeout(()=>{
        'fetched Data'
    },1000);
}

