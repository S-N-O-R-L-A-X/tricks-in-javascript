const fs = require('fs');
const readline = require('readline');

const file = './src.txt'; // src
const rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});


rl.on('line', function (text) {
    fs.appendFile('./src_copy.txt', text, err => {
        if (err) {
            console.error(err);
        }
        // done!
    });

    fs.appendFile('./src_copy.txt', text + "\n", err => {
        if (err) {
            console.error(err);
        }
        // done!
    });
});