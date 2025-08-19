<h1>~--- Waiting Tools ---~</h1>

*Wait, with or without await.*

Waiting tools is an npm package to do asynchrone or synchrone waits, with a lot of options in your code easily!
Compatibility with JS and TS.

Why using this package?
- You want to do wait in your program easily, with some options like waiting a random amount of time, or until a timestamp
- You want a clean code with a single module for wait

Install with :

``
npm i waiting-tools
``

You can choose between doing asynchronous/synchronous waits.
Asynchronous waits are recommended for performances/ressources, but you may want synchronous waits for tests or if you can't put await where you want to do waits.

<details>
<summary>In asynchronous environments</summary>
<br>
Import with :

``
const { wait, randomwait } = require("waiting-tools")
``

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
</details>
<details>
<summary>In synchronous environments</summary>
<br>
Import with :

``
const { swait, srandomwait } = require("waiting-tools")
``

## Wait for 1 second :

```
console.log("Waiting for 1 second...")
swait(1000)
```

## Wait until 1754258400000 timestamp (change the timestamp with a more recent one) : 

```
console.log("Waiting the timestamp 1754258400000...")
swait({ timestamp: 1754258400000 })
```

## Wait for a random amount of time between 4 and 8 seconds

```
console.log("Waiting for a random amount of time between 4 and 8 seconds...")
srandomwait(4000, 8000)
```
</details>

You can join the [Etoile Softwares](https://discord.gg/S4tWY332gQ) Discord Server.