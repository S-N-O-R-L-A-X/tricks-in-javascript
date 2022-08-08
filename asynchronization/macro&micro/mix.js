/**
 * setTimeout is a macro task and the precedence is the last
 * promise is a synchronized task but promise.then is a microtask
 * await is also a microtask
 */

console.log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}

setTimeout(function () {
    console.log('setTimeout 1')
}, 0)

async1()

setTimeout(function () {
    console.log('setTimeout 2')
}, 0)

new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })

console.log('script end')