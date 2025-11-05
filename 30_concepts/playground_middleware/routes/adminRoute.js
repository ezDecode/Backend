const express = require('express')
const checkAuth = require('../middlewares/checkAuth')
const router = express.Router()


router.use(checkAuth)

router.get('/', (req, res) => {
    res.send('Admin Dashboard')
})

router.get('/stats', (req, res) => {
    res.send('Admin Stats Page')
})

module.exports = router