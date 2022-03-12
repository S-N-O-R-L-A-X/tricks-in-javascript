new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.random());
    },1000);
})
.then((number1)=>{
    console.log(number1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random());
        },1000)
    })
})
.then((number2) => {
    console.log(number2);
})