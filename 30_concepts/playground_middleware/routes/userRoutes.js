const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("All the users with default route")
})

router.get('/:username', (req, res) => {
    res.send(`Welcome: ${req.params.username}`)
})


module.exports = router