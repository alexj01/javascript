//incomplete

const { spawn } = require('child_process');

const child = spawn('pwd');

child.stdout.on('data', (data) => {
    console.log()
})

child.on('exit'), (code, signal) => {
    console.log(`child process exited with ${code}, signal ${signal}`)
};