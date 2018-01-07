const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'testfiles');

const files = fs.readdirSync(dirname);

files.forEach(file => {

    const filepath = path.join(dirname, file);

    fs.stat(filepath, (err, stats) => {
        if(err) throw err;

        fs.truncate(filepath, parseInt(stats.size/2), (err) => {
            if (err) throw err;
        });

    });

});