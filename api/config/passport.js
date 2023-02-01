import passport from "passport";
import local from 'passport-local';
import jwt from 'passport-jwt';
import { userService } from "../services/services.js";
import { cookieExtractor, createHash } from "../utils.js";
import config from "./config.js";

const LocalStrategy = local.Strategy;
const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'userName', session: false }, async (req, username, password, done) => {
        let { userName } = req.body;
        try {
            let user = await userService.getBy({ userName: username })
            if (user) return done(null, false, { message: "User already exists" });
            const newUser = {
                userName,
                password: createHash(password)
            }
            let result = await userService.save(newUser);
            return done(null, result);
        } catch (error) {
            console.log(error);
            return done(error);
        }
    }))

    passport.use('login', new LocalStrategy({ usernameField: 'userName' }, async (username, password, done) => {
        try {
            const user = await userService.getBy({ userName: username })
            if (!user) return done(null, false, { messages: "No user found" });
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }))

    passport.use('jwt', new JWTStrategy({ jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]), secretOrKey: config.jwt.secret }, async (jwt_payload, done) => {
        try {
            let user = await userService.getBy({ _id: jwt_payload.id })
            if (!user) return done(null, false, { message: "User not found" })
            return done(null, user);
        } catch (error) {
            return done(error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        let result = await userService.getBy({ _id: id })
        done(null, result);
    })
}

const getLogin = (req, res) => {
    if (req.isAuthenticated()) {
        let { userName } = req.user;
    }
}

export const checkAuthentication = (req, res, next) => {
    console.log(req.user);
    console.log('log en checkauthentication ' + req.isAuthenticated());
    if (!req.isAuthenticated()) res.send({ login: false });
}

export default initializePassport;