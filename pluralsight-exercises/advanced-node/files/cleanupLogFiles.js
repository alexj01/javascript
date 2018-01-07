const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'logfiles');

// fs.mkdirSync(dirname);
//
//
// for (let i = 0; i < 10; i++) {
//     const filePath = path.join(dirname, `file${i}_${Date.now()}`);
//     fs.writeFileSync(filePath, i, (err) => {
//         if (err) throw err;
//
//         const time = (Date.now() - i * ms1Day) / 1000;
//         fs.utimes(filePath, time, time, (err) => {
//             if (err) throw err;
//         })
//     })
// }


let files = fs.readdirSync(dirname);
const ms1Day = 24 * 60 * 60 * 1000;

files.forEach(file => {
    const filePath = path.join(dirname, file);
    fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        if (Date.now() - stats.mtime.getTime() > 7 * ms1Day) {
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log(`deleted ${filePath}`)
            })
        }
    })
});