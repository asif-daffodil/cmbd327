// Creating promise
const myPromise = new Promise((resolve, reject) => {
    const isSuccess = false;
    const returnResFunc = s => s === true ? resolve("Promise kept") : reject("Promise didn\'t kept");
    setTimeout(() => returnResFunc(isSuccess), 3000);
});


const usePromise = async () => {
    try{
        const res = await myPromise;
        console.log(res);
    }catch(err){
        console.error(err);
    }
}

usePromise()