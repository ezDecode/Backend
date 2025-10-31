// Executes Line by line in a synchronous manner

// console.log("Start")


// function syncTask(){
//     for( let i = 1; i <= 3; i++){
//         console.log("Processing Step: ", i)
//     }
// }

// syncTask()

// console.log("End");


// Async Function: Which runs in the background and allows other task to run -> Results will be handled in the end..


// console.log("Async Start")

// setTimeout(() => {
//     console.log("Async Container Function;")
// }, 2000);

// console.log("Async End")



// Synchronous vs Async with File System


// const fs = require('fs');

// console.log("Reading File Synchronously...");

// const data = fs.readFileSync("nodefs.txt", "utf-8")
// console.log(data);
// console.log("Done File Reading");



// console.log("File Reading in Async Mode: ");


// fs.readFile('nodefs.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// console.log("Done Reading Async...");



// Async/Await (Modern Way to Handle Async)


const fs = require('fs').promises;


async function readFileAsync(){
    try{
        const data = await fs.readFile('nodefs.txt', 'utf-8');
        console.log(data)
    } catch(err){
        console.error(err);
    }
}

readFileAsync()
console.log("This runs immediately (Non- Blocking Hai yeh)")


// Basics Done