import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import { checkAuthentication } from '../config/passport.js';
import { passportCall, serialize } from '../utils.js';

const router = express.Router();

router.get('/', checkAuthentication)

router.get('/current', passportCall('jwt'), (req, res) => {
    let user = serialize(req.user, ["username"])
    res.send({ status: "success", payload: user });
})

router.post('/register', passportCall('register'), (req, res) => {
    res.send({ status: "success", message: "Singed up" })
})

router.post('/login', passportCall('login'), (req, res) => {
    let user = req.user;
    let token = jwt.sign(user, config.jwt.secret)
    res.cookie('sessionCookie', 'boom', {
        maxAge: 60 * 60 * 1000
    })
    res.cookie(config.jwt.cookie_name, token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    })
    res.send({ status: "success", payload: user })
})

export default router