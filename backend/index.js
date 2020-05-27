const fsReadFile = require('./indexBack/fsReadFile');

const requestHandler = function (request, response) {
    console.log(request.url)
    fsReadFile(request.url, response);
}

module.exports = requestHandler;
