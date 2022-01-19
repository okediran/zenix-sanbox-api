const express = require("express");
const router = express.Router();
const Passport = require("passport")
const Register = require("../controller/regsiter");
const Login = require('../controller/login');
const Users = require('../controller/user');
const Wallet = require('../controller/wallets');

// register section
router.post('/register', Register);

// login section
router.post('/login',Login);

// users section
router.patch('/user', Passport.authenticate('jwt',{session:false}), Users.update);
router.get('/user', Passport.authenticate('jwt',{session:false}), Users.profile);

// wallet section
router.post('/wallet',Wallet.create);
router.get('/wallet', Wallet.retrieve);
router.patch('/wallet/:id', Wallet.update);
router.delete('/wallet/:id', Wallet.destroy);

module.exports = router;
