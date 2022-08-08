console.log(1);

new Promise(() => {
    console.log(2);
})

new Promise((resolve, reject) => {
    resolve();
})
    .then(() => {
        console.log(4)
    })
console.log(3);