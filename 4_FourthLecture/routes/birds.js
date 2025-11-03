const express = require('express')
const router = express.Router()

// const timeLog = (req, res, next) => {
//     console.log("Date: ", Date.now())
//     next();
// }

// router.use(timeLog)

router.get('/', (req, res) => {
    res.send('This is bird express Routing(Home Page)')
})

module.exports = router
