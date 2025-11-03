// const express = require('express')
// const app = express()

// const port = 3000

/*
//Basic syntax structure
app.get('route', (requestHandler)=>{
    // reqestHandler is a middleware
    // function(req,res)
    // res.send("Some message")
})
*/
/*
const user = "Akash"
//routes
app.get('/', (req, res) => {
    res.send("Welcome to the Page")
})

// this route is for the profile
app.get('/profile', (req, res) => {
    res.send(`This is profile for testing, ${user}`)
})

app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
})
*/


// Express JS ek framework hai -> yaha pr tum code likhe, lekin framework apne hisab se code to call karega (At the right time)
// Library -> you're the boss here! Code likho aur apne hisab se call karo!

/*
app.use((req, res, next) => {
    console.log("Middle Ware chala perfectly");
    next();
})
app.use((req, res, next) => {
    console.log("Ek aur bar chala middleware");
    next();
})

app.get('/', (req, res)=>{
    res.send("Welcome to the page")
})
app.get('/profile', (req, res) => {
    res.send('This is profile for testing');
})
app.get('/about', (req, res) => {
    res.send('About Page');
})

app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
})

*/

//Route specific Middleware

// const express = require('express')
// const app = express();
// const port = 3000;

/*
const aboutPass = (req, res, next) => {
    console.log("About Page ke liye chalegi")
    next();
}


const profilePass = (req, res, next) => {
    console.log('Tab chalegi jab Profile use hoga..')
    next()
}

app.get('/profile', profilePass, (req, res) => {
    res.send("Profile Page hai ye")
})

app.get('/about', aboutPass, (req, res)=>{
    res.send("About Page hai ye")
})

app.listen(port, () => {
    console.log(`Server Port: ${port}`)
})
*/


// Ab iske baad ek simple auth system banayenge -- maja ayega
/*
const isLoggedIn = (req, res, next) => {
    const loggedIn = false; 

    if(!loggedIn){
        return res.status(401).send('Unauthorised user')
    }
    next()
}

app.get('/home', (req, res) => {
    res.send("This is home page.")
})

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.send("This is home page");
})


app.listen(port, () => {
    console.log(`Server runnning on Port: ${port}`)
})
*/



// Handling Request and Response in the Express JS (Express Routing)
const express = require('express')
const app = express();
const birds = require("./routes/birds")
const port = 3000;

// to work on the post request: 

app.use(express.static("public"))
app.use("/birds", birds)
app.get('/', (req, res) => {
    res.send('This Get Response');
})


// So test the post, we can use the HTML file but not always; as this is not the best way to do it! So we'll use the Postman for this!
// app.post('/', (req, res) => {
//     console.log('This is a Post Response')
//     res.send({
//         name: "Akash",
//         age: 22
//     })
// })
// app.get('/index', (req, res) => {
//     console.log('This is a get Response')
//     res.sendFile("template/index.html", {root: __dirname})
// })

// app.get('/api', (req, res) => {
//     res.json({a:1, b:2, c:3, d:4})
// })

app.listen(port, () => {
    console.log(`Port: ${port}`)
})

// And we can chain it together actually it'wll work like write the app once and then chain all the methods with it


// Some Response methods:
/*
res.download()
res.json()
res.jsonp()
res.redirect()
res.render()
res.sendFile() -- Send a fucking file and using the get method it'll print all the things in the File you want to send in.
res.send()
res.sendStatus()
*/


//Express Routes
// So we'll create a Route file and Handle all the messy routes there and export all the modules to here!