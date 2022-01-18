const passport = require("passport");
const passportJwt = require("passport-JWT");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require("../models");



passport.use(
    new StrategyJwt({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    function (jwtpayload,done) {
        return db.User.findOne({where:{id:jwtpayload.id}})
        .then((user) =>{
            return done(null,user);
        }).catch((err) =>{
            return done(err)
        });
    })
);

