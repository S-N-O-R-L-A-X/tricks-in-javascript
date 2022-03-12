
//1秒后打印1,再1秒后打印2，再1秒后打印3
new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve();
    },1000);
})
.then(() => {
    console.log("1")
    return new Promise((resolve, reject) =>{
        setTimeout(() => { 
            resolve();
        },1000);
    })
})
.then(() => {
    console.log("2")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },1000);
    })
})
.then(() => {
    console.log("3")
})

// 与下面这段代码等价
setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2"); 
        setTimeout(() => {
            console.log("3");
        },1000)
    },1000)
},1000)