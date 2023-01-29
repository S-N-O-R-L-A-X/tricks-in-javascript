const fs = require('fs');

const content = 'Other content!';

/**
 * append straight to the end of the file without a new line
 */
fs.appendFile('demo_2.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // done!
});