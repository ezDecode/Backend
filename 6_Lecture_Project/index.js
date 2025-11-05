const express = require('express')
const app = express()
const path = require('path')


//parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

//Setting foe EJS
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     res.render("index")
// })

// Dynamic Name Only
// app.get('/profile/:username', (req, res) => {
//     res.send(`Welcome back, ${req.params.username}`)
// })


// Dynamic name and age
app.get('/profile/:username/:age', (req, res) => {
    // res.send(req.params)
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`)
})

app.listen(4000, () => {
    console.log("Server Running");  
})