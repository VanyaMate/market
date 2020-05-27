const fs = require('fs');

const fsReadFile = function (url, response) {
    if (url.match('.js')) {
        console.log('is js file');
        fs.readFile(`.${url}`, (err, data) => {
            response.end(data);
        });
    } else {
        fs.readFile('./frontend/index.html', (err, data) => {
            response.end(data);
        });
    }
}

module.exports = fsReadFile;
