const db = require("../models");

module.exports = {
    update: async (req, res) => {
        const {language,skills,age,location,yearOfexperience,aboutme,availability,job} = req.body;
        var userUpdate = {};
        if(language) 
            userUpdate["language"] = language
        if(skills) 
            userUpdate["skills"] = skills
        if(location) 
            userUpdate["location"] = location
        if(age) 
            userUpdate["age"] = age
        if(yearOfexperience) 
            userUpdate["yearOfexperience"] = yearOfexperience
        if(aboutme) 
            userUpdate["aboutme"] = aboutme
        if(availability) 
            userUpdate["availability"] = availability
        if(job) 
            userUpdate["job"] = job
        
        db.User.update(userUpdate, {where: {id:req.user.id}})
        .then(()=>{
        res.status(200).json({message:'profile updated'})
        })
        .catch( () => {
            res.status(400).json({errors: 'profile cannot update'})
        });
    }
};

