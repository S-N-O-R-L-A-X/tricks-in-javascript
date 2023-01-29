const readline = require('readline');
const fs = require('fs');

const file = './demo.txt';
const rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});

let cnt = 0;
rl.on('line', function (text) {
    console.log("第" + cnt + "行内容为:" + text);
    ++cnt;
});