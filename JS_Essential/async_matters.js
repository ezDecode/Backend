// ============================================================================
// ASYNCHRONOUS JAVASCRIPT - COMPREHENSIVE GUIDE
// ============================================================================

// ============================================================================
// SECTION 1: FUNDAMENTALS
// ============================================================================

// 1. Async and Sync kya hota hai? Done!
// 2. JS is not a asynchronous -- it's a single threaded; but it becomes async in behaviour because of the browser enviornment or Node.js runtime which provide feature like setTimeout, fetch, promise etc..

// Callback -> Function hota hai


// ============================================================================
// SECTION 2: EVENT LOOP & CALL STACK
// ============================================================================

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


// ============================================================================
// SECTION 3: SINGLE THREADING vs MULTI THREADING
// ============================================================================

// Single threading and Multi threading

// JS Handles one task at a time that's why it's being called Single threaded! JS can't handle multiple tasks in parallel!


// ============================================================================
// SECTION 4: CALLBACKS
// ============================================================================

// Callbacks => Functions

// Callbacks are fuctions passed as args to run later (Async)


// ============================================================================
// SECTION 5: PROMISES
// ============================================================================

// Promises: Cleaner async handling

// ----------------------------------------------------------------------------
// Example 1: Pizza Ordering Example
// ----------------------------------------------------------------------------

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


// ----------------------------------------------------------------------------
// Example 2: Random Number Promise
// ----------------------------------------------------------------------------

// User Will ask for a number between 0-9 and if the number is below 5 then reject otherwise resolve

// Working Fine: Yooooooo
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


// ============================================================================
// SECTION 6: PROMISE CHAINING
// ============================================================================

/*
sabse pehle ghap pe aoo
gate kholo aur gate lagao
Khana Pakao aur khana khao
so jao tum thak gye ho
*/ 

// ----------------------------------------------------------------------------
// Example 1: Basic Promise Chaining (Non-optimized)
// ----------------------------------------------------------------------------

// const ans = new Promise(function(res, rej) {
//     return res("Sabse Pehle ghar par aoo")
// })

// const answerP2 = ans.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("Gate kholo aur gate lagao")
//     })
// })

// const answerP3 = answerP2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("Khana Pakao and khao")
//     })
// })

// const finalAnswer = answerP3.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res('Sojao thak gye hoge')
//     })
// })

// finalAnswer.then(function(data){
//     console.log(data);
// })


// ----------------------------------------------------------------------------
// Example 2: Optimized Promise Chaining
// ----------------------------------------------------------------------------

// We can optimize this further

// const ans = Promise.resolve("Sabse Pehle ghar jaa")

// ans
//     .then((msg) => {
//         console.log(msg);
//         return "Then tum gate kholo aur band karo"
//     })
//     .then((msg) => {
//         console.log(msg);
//         return "then tum khana pakao aur khao"
//     })
//     .then((msg) => {
//         console.log(msg)
//         return "End mai tum sojao thak gye hoge"
//     })
//     .then((msg) => {
//         console.log(msg);
//     })


// ============================================================================
// SECTION 7: ASYNC/AWAIT
// ============================================================================

/*
Async: Functions always return a Promise (No matter what's inside of it)
await: Pause until this Promise settles (Either resolve or reject)

Basically the Async/await is Promises with a cleaner face!
So the catch is await actually do not block the thread, it only pauses inside that async function.

try/catch: is how you handle rejections from those Promises - cleanly, synchronously 
*/ 

// ----------------------------------------------------------------------------
// Example 1: Promise vs Async/Await Comparison
// ----------------------------------------------------------------------------

// Promise Version

// const getData = new Promise((resolve) => {
//     setTimeout(() => resolve("Data mil gya"), 2000)
// })

// getData
//     .then((msg) => console.log(msg))
//     .catch((err) => console.error(err))
    

// Async/await version:

// async function getData(){
//     try{
//         const data = await new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve("Data Mil gaya")
//             }, 2000);
//         })
//         console.log(data)
//     }catch(err){
//         console.log("Error: ",err)
//     }
// }
// getData()


// ============================================================================
// SECTION 8: ASYNC/AWAIT WITH API CALLS
// ============================================================================

// Async await with a API key first we'll implement the easist one and then we'll go for the Advanced one

// ----------------------------------------------------------------------------
// Example 1: Fetch API - Dad Jokes (Promise Version)
// ----------------------------------------------------------------------------

/*
function abcd(){
    fetch(`https://icanhazdadjoke.com/`, {
        headers: {
            Accept: "Application/json"
        }
    })
    .then(function(resolve){
        return resolve.json()
    })
    .then(function(data){
        // console.log(data) this is for the whole data to show like the ID, Joke, and Status!
        console.log("Joke: ",data.joke) // this is where we are only asking for the Joke!
    })
    .catch((err) => console.error("Error: ",err))
}

abcd()
*/


// ----------------------------------------------------------------------------
// Example 2: Fetch API - Random Users (Async/Await Version)
// ----------------------------------------------------------------------------

// Now the Async/await version:

/*
async function getRandomUser(){
    const raw = await fetch(`https://randomuser.me/api/?results=50&gender=male`)
    const data = await raw.json()
    // console.log(data.results[0].name.first) 
    //acha yeh log toh  sync code hai lekin we are asking for something which is depened on the async so this will wait till the Async code to complete then finally it'll executed okay!

    data.results.forEach((user, index) => {
        console.log(`${index+1}. ${user.name.first}`);
        
    });
}
getRandomUser();

*/

// Simple hai jab vhi koi code async hai; we have to wait for to get the result or answer! As we don't know how much it'll take to get the answer or to fetch it


// ============================================================================
// SECTION 9: FILE SYSTEM OPERATIONS WITH ASYNC/AWAIT
// ============================================================================

// Using to read a file 

const fs = require('fs/promises')

async function fileReadExample() {
    try{
        const data = await fs.readFile('nodefs.txt', {encoding: 'utf-8'})
        console.log(data)
    }catch(err){
        console.error(err)
    }
}

fileReadExample()


// ============================================================================
// DEVELOPER TIP
// ============================================================================

// As a dev oyu should always find the mistakes in the spelling before the bug in the code