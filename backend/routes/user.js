const express = require('express')

const User = require('../models/userModel')

const { testUser, signupUser, loginUser } = require('../controller/userController')

const router = express.Router()

router.get('/test', () => testUser)

router.post('/login', loginUser)

router.post('/signup', signupUser)

module.exports = router