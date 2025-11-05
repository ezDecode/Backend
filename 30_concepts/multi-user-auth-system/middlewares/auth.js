const users = require("../data/user")

function getUser(req, res, next) {
    const username = req.query.name 
    const user = users.find(u => u.name === username)
    if (!user) return res.status(401).json({ message: 'User Not Found' })
    req.user = user
    next()
}


function authRole(role) {
    return (req, res, next) => {
        if(req.user.role !== role){
            return res.status(403).json({message: 'Access Denied'})
        }
        next()
    }
}


module.exports = {getUser, authRole}