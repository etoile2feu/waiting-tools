const { wait, randomwait } = require("../index.js")

module.exports = {

    async test() {
        console.log("Waiting for 1 second...")
        await wait(1000)
        /*
        const timestamp = x
        console.log(`Wait until ${timestamp}...`)
        await wait({ timestamp: timestamp })
        */
        console.log("Waiting a random amount of time between 2 and 5 seconds...")
        await randomwait(2000, 5000)
    }

}