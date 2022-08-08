console.log('start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

new Promise((resolve) => {
    console.log('promise')
    resolve()
})
    .then(() => {
        console.log('then1')
    })
    .then(() => {
        console.log('then2')
    })

console.log('end')

// start
// promise
// end
// then1
// then2
// setTimeout