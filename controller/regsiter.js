const db = require("../models");
module.exports = async  (req,res) => {

    const {fullname,email,password} = req.body;

    const alreadyExitsUser = await db.User.findOne({where:{email}})
    .catch((err) => {
        res.json(err.errors)
    });

    if (alreadyExitsUser) {
        return res.json({message:'user with email already exits!'});
    }


   db.User.create({fullname,email,password})
   .then(()=>{
       res.status(200).json({message:'registration sucessfull'})
   })
     .catch( () => {
         res.json({errors: 'cannot register user at the moment!'})
     })
}

