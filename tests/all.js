const { wait, randomwait, swait, srandomwait } = require("../index.js")

module.exports = {

    /*
    Testing asynchronously the module
    Example:
    ==> await test()
    */

    async test() {
        console.log("Waiting for 1 second...")
        await wait(1000)
        const timestamp = Date.now() + 4000
        console.log(`Wait until ${timestamp}...`)
        await wait({ timestamp: timestamp })
        console.log("Waiting a random amount of time between 2 and 5 seconds...")
        await randomwait(2000, 5000)
    },

    /*
    Testing synchronously the module
    Example:
     ==> stest()
    */

    stest() {
        console.log("Waiting for 1 second...")
        swait(1000)
        const timestamp = Date.now() + 4000
        console.log(`Wait until ${timestamp}...`)
        swait({ timestamp: timestamp })
        console.log("Waiting a random amount of time between 2 and 5 seconds...")
        srandomwait(2000, 5000)
    }

}