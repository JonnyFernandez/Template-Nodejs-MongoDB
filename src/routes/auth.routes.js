const { Router } = require('express')
const Ctrl = require('../controllers/authCtrl')

const auth = Router()

auth.post('/login', [Ctrl.login]) //login
auth.post('/register', [Ctrl.register]) //register
auth.post('/logout', [Ctrl.logout]) //log out
auth.post('/refresh-token', [Ctrl.refreshToken]) //get profile
auth.get('/profile', [Ctrl.profile]) //get profile






module.exports = auth