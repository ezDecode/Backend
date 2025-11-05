const express = require('express')
const app = express()

// import Middleware
const logger = require('./middlewares/logger')
// import Routes
const UserRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoute')

//Parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use(logger)

app.use((req, res, next) => {
  console.log('Incoming Request Path:', req.path)
  next()
})

app.use('/users', UserRoutes)
app.use('/admin', adminRoutes)


app.get('/', (req, res) => {
    res.send('Hello From the Middleware Playground!')
})

app.listen(4000, () => {
    console.log("Server Running");
    
})