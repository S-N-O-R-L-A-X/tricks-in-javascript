/**
 * Promise.reject() 与Promise.resolve()类似，Promise.reject()会实例化一个拒绝的Promise并抛出一个异步错误，且这个错误不能通过 try/catch 捕获
 * 这个错误可以通过拒绝处理程序.catch捕获，也可以通过then里回调捕获。
 * let p1 = new Promise((resolve, reject) => reject()); 与 let p2 = Promise.reject();等价
 * 
 */


new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 2);
        if (num)
            resolve(num);
        else
            reject(num)
    }, 3000)
})
    .then((param) => {
        console.log(`resolved.The number is ${param}`);
    })
    .catch((param) => {
        console.log(`rejected.The number is ${param}`);
    })

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The following is equivalent as the previous one")
        const num = Math.floor(Math.random() * 2);
        if (num)
            resolve(num);
        else
            reject(num)
    }, 3000)
})
    .then((param) => {
        console.log(`resolved.The number is ${param}`);
    }, (param) => {
        console.log(`rejected.The number is ${param}`);
    })

/*

let p = Promise.reject(3);// 拒绝Promise的理由作为第一个参数传给 Promise.reject()。如果给它传一个Promise对象，则这个Promise会成为它返回的拒绝Promise的理由：
setTimeout(console.log, 0, p); // Promise <rejected>: 3
p.then(null, (e) => setTimeout(console.log, 0, e)); // 3
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));// Promise <rejected>: Promise <resolved> 

*/

