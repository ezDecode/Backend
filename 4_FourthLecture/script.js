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

const express = require('express')
const app = express();
const port = 3000;

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