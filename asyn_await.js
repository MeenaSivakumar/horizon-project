
const getNumber = async (isGenerate) => {
  try {
    const num = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isGenerate) {
          resolve(Math.random());
        } else {
          reject(new Error("number can't be generated"));
        }
      }, 200);
    });
    return num;
  } catch (error) {
    console.log("error message", error.message);
  }
};
(async()=>{
   console.log(await getNumber(false));
})()

