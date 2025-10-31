const { error, log } = require('console');
const fs = require('fs');

/*
 So in the File System module we'll learn about the 
 WriteFile -- done
 Appendfile -- done
 copyFile -- done
 readFile -- done
 Rename -- done
 unlink 

*/

// fs.writeFile("hi.txt", "Using the writeFile of the Node.js. ", function(err){
//     if(err) console.error(err)
//     else console.log("Done")
// })


// fs.appendFile("./hi.txt", "We are performing the appendFile of the Node.js", function(err){
//     if(err) console.error(err);
//     else console.log("Done hai bhai add kr diya")
// })

// fs.rename("hi.txt", "hey.txt", (err) => {
//     if(err) console.error(err);
//     else console.log("Rename Done");
// })

// this is all about like putting the file path, encoding format, then we are going to pass parameters err and data; then we'll be adding a condition there to check the error (as it's a Async Function) then we'll console.log(data)
// fs.readFile("hey.txt", "utf-8", (err, data) => {
//     if(fs.existsSync("hey.txt")) console.log("File is there!");
//     else console.log("No file found!");
//     if(err) console.error(err);
//     console.log(data);
// })



// so we can use the copyFile or just simply the fs.cp() then all things; which does the same job

// fs.cp("hey.txt", "heyCopy.txt", (err) => {
//     if(err) console.error(err);
//     console.log("Done Copying Boss!");
// })


// fs.cp("hey.txt", "copyFiles/heyCopy.txt", (err) => {
//     if(err) console.error(err);
//     console.log("Done Copying to inside the folder!")
// })

// Done Completed the File system basic operations


// Now we'll delete a file which we have created so far!

fs.unlink("copyFiles/heyCopy.txt", (err)=>{
    if(err) console.error(err);
    console.log("File Deleted Sucessfully");
})