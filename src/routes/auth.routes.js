const { Router } = require('express')
const handler = require('../handlers/authHandler')

const auth = Router()

auth.post('/login', [handler.login]) //login
auth.post('/register', [handler.register]) //register
auth.post('/logout', [handler.logout]) //log out
auth.post('/refresh-token', [handler.refreshToken]) //get profile
auth.get('/profile', [handler.profile]) //get profile






module.exports = auth