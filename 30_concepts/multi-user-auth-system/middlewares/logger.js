module.exports = (req, res, next) => {
    // res.send(`[${new Date().toLocaleString()}], Method: ${req.method}`)
    console.log(`[${new Date().toLocaleString()}], Method: ${req.method}`)
    next()
}