const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File "welcome.txt" has been created with content: ', content);
    }
});

