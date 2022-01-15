const db = require("../models");
const jwt = require("jsonwebtoken");


module.exports = async (req,res) =>{

    const { email, password } = req.body;

    const userwithemail = await db.User.findOne({where: {email}});

    if (userwithemail.password !== password)
        return res.json({message:"email or password does not match!"});

    const jwtToken = jwt.sign({id: userwithemail.id, email:email.userwithemail}, process.env.JWT_SECRET);

    res.json({message:"Welcome Back!", token: jwtToken})
}

