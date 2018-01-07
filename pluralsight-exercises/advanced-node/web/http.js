const fs = require('fs');
const server = require('https')
    .createServer({
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem'),
    });

server.on('request', (req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Hello world.\n');

    setTimeout(function () {
        res.write('something else\n')
    }, 1000);

    setTimeout(function () {
        res.end('done')
    }, 5000)
});

server.timeout = 10000;
server.listen(443);