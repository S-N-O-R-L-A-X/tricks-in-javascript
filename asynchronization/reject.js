/**
 * Promise.reject() 与Promise.resolve()类似，Promise.reject()会实例化一个拒绝的期约并抛出一个异步错误，且这个错误不能通过 try/catch 捕获，而只能通过拒绝处理程序捕获
 * let p1 = new Promise((resolve, reject) => reject()); 与 let p2 = Promise.reject();等价
 */




// 这个。这个参数也会传给后续的拒绝处理程序：
let p = Promise.reject(3);// 拒绝Promise的理由作为第一个参数传给 Promise.reject()
setTimeout(console.log, 0, p); // Promise <rejected>: 3
p.then(null, (e) => setTimeout(console.log, 0, e)); // 3
关键在于，Promise.reject()并没有照搬 Promise.resolve()的幂等逻辑。如果给它传一个Promise对象，则这个Promise会成为它返回的拒绝Promise的理由：
setTimeout(console.log, 0, Promise.reject(Promise.resolve()));
// Promise <rejected>: Promise <resolved> 