<h1>~--- Waiting Tools ---~</h1>

- This readme is temporary and will be better at the end of the day

Waiting tool is a npm package to help you put delay in your code easily !
Compatibility with JS and TS.

Install with : ``npm i waiting-tools``</br>
Import with : ``const { wait, randomwait } = require("waiting-tools")``</br>

## Wait 1 second :

```
console.log("Waiting 1 second...")
await wait(1000)
```

## Wait until 1754258400000 timestamp (change the timestamp with a more recent one) : 

```
console.log("Waiting the timestamp 1754258400000...")
await wait({ timestamp: 1754258400000 })
```

## Wait a random amount of time between 4 and 8 seconds

```
    console.log("Waiting a random amount of time between 4 and 8 seconds...")
    await randomwait(4000, 8000)
```