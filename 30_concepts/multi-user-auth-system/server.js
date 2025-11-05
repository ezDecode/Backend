const express = require('express')
const app = express()
const errorHandler = require('./middlewares/errorHandler')
const logger = require('./middlewares/logger')
const {getUser, authRole} = require('./middlewares/auth')
const users = require("./data/user")
const PORT = 3000;

//Parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//Custom middleware
app.use(logger)


app.get('/', (req, res) => {
    res.send("This is default Home Route")
})

// Requesting a GET Method to the users
app.get("/users", (req, res) => res.json(users))

//Protected Route

app.get('/profile', getUser, (req, res) => {
    res.json({message: `Welcome ${req.user.name}`, role: req.user.role})
})

/*
First we'll check with the getUser (for existing user)
Then we'll move to the authRole middleware for the role check
*/
app.get('/admin', getUser, authRole('admin'), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}` })
})

// The errorHandler comes last
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running on the Port: ${PORT}`)
})
