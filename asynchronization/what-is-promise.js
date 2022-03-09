/**
 * Promise
 * 通过调用promise的两个函数来控制期约状态。这两个函数通常命名为resolve()和reject()。调用resolve()会把状态切换为fulfilled，调用 reject()会把状态切换为rejected并抛出错误。
 */


let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // node.js 会显示 Promise {undefined} 浏览器会显示 Promise {<fulfilled>: undefined}
let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2); //两个平台都会报错 node.js 会显示 Promise {<rejected> undefined} 浏览器会显示 Promise {<rejected>: undefined}
