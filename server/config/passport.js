const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
const config = require('../config/config');
var opts = {}   

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET || config.secret;


module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
            .catch(err => {
                return done(err, false)
            })
    }))
}