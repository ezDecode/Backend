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

// fs.writeFile("/hey.txt", "Hey we are just adding the Files", (err) => {
//     if(err) console.error(err)
//     console.log("Done, File Added!");
// })


// fs.readdir('FolderTest', (err, files) => {
//     if(err) throw err;
//     console.log(files);
// }) 
// This will read all the files inside of the FolderTest Directory


// Now we'll remove the Directory
// First we have to remove the files inside of it.

// fs.unlink('./FolderTest/hey.txt', (err) => {
//     if(err) throw err;
//     console.log("File Deleted Successfully");
// })

// Then in the second step we can remove the folder

// fs.rmdir('FolderTest', (err) => {
//     if(err) throw err;
//     console.log("Folder Removed Successfully");
// })

// If a folder already having files in it then at first we have to delete those files then we can delete the folder; otherwise it'll throw error!


fs.access('FolderTest', fs.constants.F_OK, (err) => {
    console.log(err ? "Folder Not Found" : "Folder Exists");
})