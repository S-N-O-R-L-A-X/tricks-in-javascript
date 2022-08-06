Promise.resolve(1)
    .then((res) => {
        console.log(res);
        throw new Error('something bad happened');
    })
    .catch((err) => {
        console.log('first catch: ' + err.message);
        return 2;
    })
    .then((res) => {
        console.log(res);
        return Promise.resolve(3);
    })
    .catch((err) => {
        console.log("second catch: " + err.message);
        return 4;
    })
    .then((res) => {
        console.log(res);
        throw new Error('something bad happened again');
    })
    .catch((err) => {
        console.log("third catch: " + err.message);
    })
    // 1
    // first catch: something bad happened
    // 2
    // 3
    // third catch: something bad happened again