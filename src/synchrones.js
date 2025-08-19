module.exports = {

    /*
    This function wait synchronously x milliseconds, or it wait until the x timestamp.
    Examples :
    ==> await swait(1000) // wait for 1 second
    ==> await swait({ timestamp: 1754258400000 }) wait until this timestamp. The timestamp must be in milliseconds !
    */

    swait(argument) {

        if (!argument.timestamp) var time = argument

        if (time && time >= 0) {

            var time = Number(time)
            if ((!time || time < 0) && time != 0) throw new Error("[wait-js] The time must be an integer, and more than 0!")

            var debut = Date.now()
            while (Date.now() - debut < time) {

            }
            return true


        } else if (argument && argument.timestamp) {

            var timestampEnd = Number(argument.timestamp)
            if (timestampEnd < Date.now()) throw new Error("[wait-js] You can't delay something to the past!")
            if ((!timestampEnd || timestampEnd < 0) && timestampEnd != 0) throw new Error("[wait-js] The timestamp must be an integer, and more than 0!")

            while (Date.now() < timestamp) {

            }
            return true


        } else throw new Error("[wait-js] You called the wait() function without arguments, or your arguments are invalid!")
    },

    /*
    This function wait synchronously for a random moment between 2 values.
    Examples:
    ==> srandomwait(2000, 5000) // Wait for a random moment between 2 and 5 seconds.
    */

    srandomwait(min, max) {

        return new Promise(async (resolve, reject) => {
            if (((!min && min != 0) || min < 0) || ((!max && max != 0 || max < 0))) throw new Error("[wait-js] You called the randomwait() function without arguments, or your arguments are invalid!")
            const random = Math.floor(Math.random() * max) + min;
            setTimeout(() => {
                resolve(true)
            }, random)
        })

    },

    /*
    This function test synchronously the module.
    await stest() // Execute the ./tests/all.js tester.
    */

    stest() {
        require("../tests/all.js").stest()
    }

}