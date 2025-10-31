const fs = require('fs')

/*  
Now we'll be working on the Folder System and Here We'll covering the:

1. Create a Directories
2. Read
3. Remove
4. Checking for existance
*/


// 1. Create Dir

// fs.mkdir('FolderTest', (err) => {
//     if(err) console.error(err);
//     console.log("Folder Created successfully")
// })

// Now we'll add a file inside of it!

fs.writeFile("hey.txt", "Hey we are just adding the Files", (err) => {
    if(err) console.error(err)
    console.log("Done, File Added!");
})