const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");

module.exports = async (req,res) => {

    const { email, password } = req.body;

    const userwithemail = await db.User.findOne({where: {email}})
    if (!userwithemail)
        res.status(400).json({"message": "Email or password not correct"})
    
    const password_check = await bcrypt.compare(password, userwithemail.password)
    if(!password_check)
        res.status(400).json({"message": "Email or password not correct"})

    const jwtToken = jwt.sign(
        {
            id: userwithemail.id, 
            email:userwithemail.email
        }, 
        process.env.JWT_SECRET);

    res.status(200).json({message:"Welcome Back!", token: jwtToken})
}

