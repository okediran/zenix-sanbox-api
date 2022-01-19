const express = require("express");
const router = express.Router();
const Passport = require("passport")
const Register = require("../controller/regsiter");
const Login = require('../controller/login');
const Users = require('../controller/user');

// register section
router.post('/register', Register);

// login section
router.post('/login',Login);

// updateprofile section
router.patch('/user', Passport.authenticate('jwt',{session:false}), Users.update);


// getprofile section
router.get('/user', Passport.authenticate('jwt',{session:false}), Users.profile);

module.exports = router;
