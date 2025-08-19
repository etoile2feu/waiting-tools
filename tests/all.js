const { wait, randomwait, swait, srandomwait } = require("../index.js")

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
    },

    stest() {
        console.log("Waiting for 1 second...")
        swait(1000)
        /*
        const timestamp = x
        console.log(`Wait until ${timestamp}...`)
        swait({ timestamp: timestamp })
        */
        console.log("Waiting a random amount of time between 2 and 5 seconds...")
        srandomwait(2000, 5000)
    }

}