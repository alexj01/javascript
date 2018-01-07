let Repo = require('./taskRepo')

class Task {
    constructor(data) {
        this.name = data.name
        this.completed = false
    }

    complete() {
        this.completed = true
    }

    save() {
        //console.log(`saving task ${this.name}`)
        Repo.save(this)
    }
}


module.exports = Task;