<h1>~--- Waiting Tools ---~</h1>

Waiting tool is a npm package to help you puting delay in your code easily !
Compatibility with JS and TS.

Install with : ``npm i waiting-tools``</br>
Import with : ``const { wait, randomwait } = require("waiting-tools")``</br>

## Wait for 1 second :

```
console.log("Waiting for 1 second...")
await wait(1000)
```

## Wait until 1754258400000 timestamp (change the timestamp with a more recent one) : 

```
console.log("Waiting the timestamp 1754258400000...")
await wait({ timestamp: 1754258400000 })
```

## Wait for a random amount of time between 4 and 8 seconds

```
    console.log("Waiting for a random amount of time between 4 and 8 seconds...")
    await randomwait(4000, 8000)
```