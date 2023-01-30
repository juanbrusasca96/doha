import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import productsRouter from './routes/products.routes.js'
import usersRouter from './routes/users.routes.js'
import tablesRouter from './routes/tables.routes.js'

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('api/tables', tablesRouter)
