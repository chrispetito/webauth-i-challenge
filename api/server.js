const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const dbConfig = require('../dbConfig')

const usersRouter = require('../users/users-router')
const authRouter = require('../auth/auth-router');

const server = express();

const sessionConfig = {
    name: 'challenge',
    secret: 'Guard this with your life',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true
    },
    store: new KnexSessionStore({
        knex: dbConfig,
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 30
    })
}

server.use(express.json());
server.use(helmet())
server.use(cors())
server.use(session(sessionConfig))

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

module.exports = server;