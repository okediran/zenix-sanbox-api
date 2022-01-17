const db = require("../models");
const bcrypt= require("bcrypt");
const saltRounds = 10;
module.exports = async  (req,res) => {
    const {fullname,email} = req.body;
    
    const alreadyExitsUser = await db.User.findOne({where:{email}})
    .catch((err) => {
        res.json(err.errors)
    });

    if (alreadyExitsUser) {
        return res.json({message:'user with email already exits!'});
    }


    bcrypt.hash(req.body.password,saltRounds,function (err,hash) {
      db.User.create({fullname:fullname,email:email,password:hash})
     .then(()=>{
       res.status(200).json({message:'registration sucessfull'})
      })
     .catch( () => {
         res.json({errors: 'cannot register user at the moment!'})
      })
    });
   
}

