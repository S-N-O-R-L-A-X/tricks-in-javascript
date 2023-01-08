const fs = require('fs');

const content = 'Some content!';

fs.writeFile('./demo_2.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});