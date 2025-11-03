const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


// Now we'll set up some GET Method

app.get('/login', (req, res) => {
    req.session.userName = "Akash"
    res.send("Session Started!")
})

app.get('/profile', (req, res) => {
    if (req.session.userName) {
        res.send(`Welcome back ${req.session.userName}`)
    }else{
        res.send('No session found; Please log in first')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.send("Session destroyed!")
})


app.listen(4000)