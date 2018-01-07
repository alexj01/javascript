const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    //super inefficient, buffers entire file into memory
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err;
    //     res.end(data)
    // });

    //better version. doesnt buffer whole file in memory
    const src = fs.createReadStream('./big.file');
    src.pipe(res);

});

server.listen(8000);
