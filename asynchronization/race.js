const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, "three");
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 10, "four");
});

Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value);
})

Promise.race([promise1, promise4]).then((value) => {
    console.log(value);
}).catch(err => console.log(err))


//four
//two