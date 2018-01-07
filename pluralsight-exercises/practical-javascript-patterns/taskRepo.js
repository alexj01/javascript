let repo = function() {

    let db = {}

    let get = (id) => {
            console.log(`getting task: ${id}`)
            return {
                name: `new task from db`
            }
        }

    let save = (task) => {
            console.log(`saving task: ${task.name} to the db`)
        }

    return {

        get: get,
        
        save:save

    }

}

module.exports = repo()