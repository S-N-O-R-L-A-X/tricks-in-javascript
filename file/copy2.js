const fs = require('fs');
const readline = require('readline');

const file = './src.txt'; // src
const rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});


rl.on('line', function (text) {
    fs.appendFileSync('./src_copy2.txt', text, err => {
        if (err) {
            console.error(err);
        }
        // done!
    });

    fs.appendFileSync('./src_copy2.txt', text + "\n", err => {
        if (err) {
            console.error(err);
        }
        // done!
    });
});