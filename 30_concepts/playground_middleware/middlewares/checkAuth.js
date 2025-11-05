module.exports = (req, res, next) => {
    console.log('Request Query: ', req.query)
    const isAdmin = req.query.admin === 'true'
    console.log('Admin Status: ', isAdmin)

    if (isAdmin) {
        next()
    } else {
        res.status(401).send('🚫 This is for admins only')
    }
}
