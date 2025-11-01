// 1. Async and Sync kya hota hai? Done!
// 2. JS is not a asynchronous -- it's a single threaded; but it becomes async in behaviour because of the browser enviornment or Node.js runtime which provide feature like setTimeout, fetch, promise etc..

//Callback -> Function hota hai


// console.log("hey");

// console.log("hey2");

// setTimeout(() => {
//     console.log("hey3");
// }, 0) //Even though the time is 0ms; it doesn't mean -- run now!
// console.log("hey4")


/*
So the whole story is:
JS has two Stack: Call Stack and another is event loop stack;
After the call stack completed; the Event Lopp moves then to the Call Stack...

Web API's Handle the async Operations.
*/



// Single threading and Multi threading

// JS Handles one task at a time that's why it's being called Single threaded! JS can't handle multiple tasks in parallel!



// Callbacks => Functions

// Callbacks are fuctions passed as args to run later (Async)

// Promises: Cleaner async handling

// Pizza Ordering Example


// const orderPizza = new Promise((resolve, reject) => {
//     let pizzaReady = false;

//     if(pizzaReady) resolve("Pizza Delivered")
//     else reject("Rejected!")
// })


// orderPizza
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error)
//     })



// User Will ask for a number between 0-9 and if the number is below 5 then reject otherwise resolve

//Working Fine: Yooooooo
// const askNumber = new Promise((res, rej) => {
//     const num = Math.floor(Math.random() * 10)
//     console.log("Number is: ",num)

//     if (num < 5) {
//         rej("Number Lower: Rejected")
//     }else {
//         res("Resolved")
//     }  
// })

// askNumber
//     .then((msg) => console.log("Success:", msg))
//     .catch((err) => console.log("Error:", err))
//     .finally(() => console.log("Done checking!"))


/*
Async: Functions always return a Promise
await: Pause until this Promise settles
try/catch: is how you handle rejections from those Promises - cleanly, synchronously 
*/ 