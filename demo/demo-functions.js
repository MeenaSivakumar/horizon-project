import { debounce,throttle } from "../utils";


const log = (msg) => console.log("Typing:", msg);
const debounceLog = debounce(log,1000)
debounceLog('h');
debounceLog("he");
debounceLog("hel");
debounceLog("hell");

const throttledFetchData = throttle(fetchData, 50);
throttledFetchData("first");
throttledFetchData("second"); 
setTimeout(() => throttled("third"),1200)