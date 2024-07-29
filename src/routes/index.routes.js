const { Router } = require('express')



const route = Router()

route.use('/auth', require('./auth.routes'))
// route.use('/other', require('./other.routes'))




module.exports = route