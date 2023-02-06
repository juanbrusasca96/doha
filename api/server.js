import express from 'express';
import passport from 'passport';
import session from 'express-session'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import productsRouter from './routes/products.routes.js'
import usersRouter from './routes/users.routes.js'
import tablesRouter from './routes/tables.routes.js'
import sessionRouter from './routes/session.routes.js'
import initializePassport from './config/passport.js';
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 1000
    }
}));
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('api/tables', tablesRouter)
app.use('/api/session', sessionRouter)

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     rolling: true,
//     cookie: {
//         httpOnly: false,
//         secure: false
//     }
// }));
