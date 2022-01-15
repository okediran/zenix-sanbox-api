const express = require("express");
const router = express.Router();
const Register = require("../controller/regsiter");
const Login = require('../controller/login')

// register section
router.post('/register', Register);


// login section
router.post('/login',Login);
module.exports = router;