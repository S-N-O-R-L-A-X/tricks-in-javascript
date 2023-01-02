const readline = require('readline');
const fs = require('fs');

const file = './demo.txt';
var rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});

rl.on('line', function (text) {
    console.log(text);
});