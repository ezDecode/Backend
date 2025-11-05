module.exports = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}], Method: ${req.method}, URL: ${req.url}`)
    next()
}