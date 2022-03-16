new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("the first layer");
        resolve(1);
    },2000)
})
.then((param) => {
    console.log(param);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("the second layer");
            resolve(2);
        },2000)
        
    })
})
.then((param) => {
    console.log(param);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("the third layer");
            resolve(3);
        },2000)
        
    })
})
.then((param) => {
    console.log(param);
})