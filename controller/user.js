const db = require("../models");

module.exports = {
    update: async (req, res) => {
        const {language,skills,age,location,yearOfexperience,aboutme,availability,job} = req.body;
        db.User.update({language,skills,age,location,yearOfexperience,aboutme,availability,job},
            {
                where: {id:req.user.id}
            })
        .then(()=>{
        res.status(200).json({message:'profile updated'})
        })
        .catch( () => {
            res.status(400).json({errors: 'profile cannot update'})
        });
    }
};

