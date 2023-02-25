const express = require('express');
const router = express.Router();

const {login,profile,processLogin} = require('../controllers/userController');
const {loginUserValidator} = require('../validations')
/* /users */

router
    
    .get('/login',login)
    .post('/login',loginUserValidator,processLogin)
    .get('/profile',profile)

module.exports = router;
